![CountryRegion A cascading dropdown for loading countries and associated states and local governments.](https://raw.githubusercontent.com/Slimcent/CountryRegion/master/images/CountryRegion.png)

# **CountryRegion**
CountryRegionJs is a simple-to-use library that provides you with **the MOST COMPREHENSIVE** cascading dropdown for loading countries, associated states and substates (local governments).

## **Badges**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

stable release version: ![version](https://img.shields.io/badge/version-1.1.4-blue)

Nuget package downloads: ![downloads](https://img.shields.io/badge/downloads-~5k-yellow)

NPM downloads: ![downloads](https://img.shields.io/badge/downloads-400+-brightgreen)

## **Tech Stack**
Vanilla Javascript, Jest, Axios

## **How Do I Get Started**

Install `CountryRegionJS` with npm

```bash
  npm install CountryRegionJS
```
or with yarn

```javascript   
   yarn add CountryRegionJS
```

Sample usage:
```javascript 

   //import countryregionjs
   import CountryRegion from "countryregionjs";

   const countryRegion = new CountryRegion();

    //sample ids
   const countryId = 1;
   const stateId = 1;
   const substateId = 1;

   //get all countries
   const countries = await countryRegion.getCountries();

   //get all statess
   const states = await countryRegion.getStates(countryId);

   //get all substates
   const subStates = await countryRegion.getLGAs(countryId, stateId);  

   //get a country   
   const country = await countryRegion.getCountry(countryId);

   //get a state
   const id = 1;
   const country = await countryRegion.getState(countryId, stateId);

   //get a sub-state
   const id = 1;
   const country = await countryRegion.getLga(countryId, stateId, substateId);
```

## **Documentation**
A comprehensive documentation is underway💥

## **Features**
- Get all countries
- Get all states
- Get all local governments
- Get a country
- Get a state
- Get a local government


## **Testing**
To run unit tests:

```shell
npm test
```

## **License**

[MIT](LICENSE) Copyright 2023 OGUBUIKE ALEX

## **Contributing**

Contributions are always welcome!

See `contributing.md` for ways to get started

## **Code Of Conduct**
Please adhere to this project's 
[Code of Conduct](code_of_conduct.md) .
