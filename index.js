const fs = require("fs");
const axios = require("axios");

const convert = async () => {
  try {
    const cities = require(`./countries/${process.argv[3]}.json`);
    const citiesLength = cities.length;
    const citiesConverted = [];
    let counter = 0;
    let successCounter = 0;

    for (const city of cities) {
      counter++;

      const {
        data: { items },
      } = await axios.get("https://geocode.search.hereapi.com/v1/geocode", {
        params: {
          apiKey: process.argv[2],
          q: city.name,
          lang: "en-US",
          in: `countryCode:${process.argv[4]}`,
        },
      });

      const item = items.find(
        (x) =>
          x.resultType === "locality" &&
          x.localityType === "city" &&
          x.address.countryCode === process.argv[4]
      );

      if (item) {
        successCounter++;

        const { address, position, mapView: bbox } = item;

        address.normalizedName = address.city
          .normalize("NFC")
          .replace(/\s+/g, "-")
          .replace(/["`.']/g, "")
          .toLowerCase();
        address.countryCode2 = process.argv[3].toUpperCase();

        const latLon = {
          lat: position.lat,
          lon: position.lng,
        };

        const itemToAdd = {
          address,
          latLon,
          bbox,
        };

        citiesConverted.push(itemToAdd);
      } else {
        // console.log("Location didnt found...");
      }

      console.log(`${counter}/${citiesLength} ${successCounter}`);
    }

    /* Remove Duplicates */
    fs.writeFileSync(
      `output/${process.argv[3]}.json`,
      JSON.stringify(
        citiesConverted.filter(
          (x, index, self) =>
            index === self.findIndex((t) => t.address.label === x.address.label)
        )
      ),
      "utf8",
      () => {}
    );
  } catch (e) {
    console.log(e);
  }
};

convert();
