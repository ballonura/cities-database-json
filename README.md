# Cities Database JSON

[![Creative Commons License](https://i.creativecommons.org/l/by/3.0/80x15.png)](https://creativecommons.org/licenses/by/3.0/)

#### These cities combined, exclude duplicates, and verify from:

Free Gazetteer Data: http://www.geonames.org \
World Cities Database Free Edition: https://www.geodatasource.com/ \
HERE: https://www.here.com/

## Total cities

```
TODO
```

## Total countries

```
TODO
```

## Formats Available

```
JSON
```

## Demo

```
TODO
```

## Missing countries

##### (Cant verify those locations data yet)

- China
- Singapore
- Japan
- South Korea
- Pakistan

## Description

This eacy city .json file is an array of object of the following schema:

- countryCode: ISO 3166-1 alpha-3
- countryCode2: ISO 3166-1 alpha-2

```
[

    "address": {
      "label": "London, England",
      "countryCode": "GBR",
      "countryName": "England",
      "countyCode": "LDN",
      "county": "London",
      "city": "London",
      "postalCode": "SW1A 2",
      "countryCode2": "GB",
      "normalizedName": "london"
    },
    "latLon": { "lat": 51.50643, "lon": -0.12719 },
    "bbox": {
      "west": -0.56316,
      "south": 51.28043,
      "east": 0.28206,
      "north": 51.68629
    }
  },
  ...
]
```

> These cities can pretty easily be matched with countries by code using the following dataset:
> https://www.iban.com/country-codes \
> Last Updated On : 24th November 2020

## Licence

This work is licensed under a [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/).
