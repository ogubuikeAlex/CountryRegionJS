![CountryRegion A cascading dropdown for loading countries and associated states and local governments.](https://raw.githubusercontent.com/Slimcent/CountryRegion/master/images/CountryRegion.png)

# **CountryRegion**

A cascading dropdown for loading countries and associated states and local governments.

## **Badges**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

stable release version: ![version](https://img.shields.io/badge/version-1.0.1-blue)


Nuget package downloads: ![downloads](https://img.shields.io/badge/downloads-3.5K-brightgreen)

NPM downloads: ![downloads](https://img.shields.io/badge/downloads-100-brightgreen)

**Vanilla Javascript, Jest, Axios**, 


## **How Do I Get Started**

First, install NPM package. Then, install CountryRegion from the package manager console:

```bash
  npm install CountryRegionJS
```
or with yarn

```javascript   
   yarn add CountryRegionJS
```

Finally, import into the file:
```javascript 
   const countryRegion = require('CountryRegionJS');
```

Sample usage:
```javascript 
   const id = 1;
   const country = countryRegion.getCountry(id);

   //check out the documentation section for more
```

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
yarn test
```

## Documentation

## **Testing**
To run unit tests:

```shell
yarn test
```

## **License**

[MIT](LICENSE) Copyright 2023 OGUBUIKE ALEX

---
```C#
   await Region.GetStates(countryId);
```

- Input

| Parameter	  | Type     | Description																|
| :--------   | :------- | :-------------------------												|
| `countryId` | `int`	 | **Required**. The id of the country to get the states associated with it	|

- Output

| Type							 |
| :-------						 |
| `Task<IEnumerable<Response?>>` |

---
```C#
   await Region.GetLGAs(countryId, stateId);
```

- Input

| Parameters	| Type		| Description															|
| :--------		| :-------	| :-------------------------											|
| `countryId`,	| `int`		| **Required**. The id of the country to get the local governments from |
| `stateId`		| `int`		| **Required**. The id of the state to get the local governments from	|

- Output

| Type							 |
| :-------						 |
| `Task<IEnumerable<Response?>>` |

---
```C#
   await Region.GetCountry(countryId);
```

- Input

| Parameter	  | Type  | Description								   |
| :--------			  | :------- | :-------------------------	   |
| `countryId` | `int` | **Required**. The id of the country to get |

- Output

| Type				|
| :-------			|
| `Task<Response?>` |

---
```C#
   await Region.GetState(countryId, stateId);
```

- Input

| Parameters	| Type     | Description											|
| :--------		| :------- | :-------------------------								|
| `countryId`,  | `int`	| **Required**. The id of the country to get a state from	|
| `stateId`		| `int`	| **Required**. The id of the state to get					|

- Output

| Type				|
| :-------			|
| `Task<Response?>`	|

---
```C#
   await Region.GetLGA(stateId, lgaId);
```

- Input

| Parameters | Type     | Description													  |
| :--------	 | :------- | :-------------------------									  |
| `stateId`	 | `int`	| **Required**. The id of the state to get local government from  |
| `lgaId`	 | `int?`	| **Required**. The name of the local government in that state	  |

- Output

| Type     |
| :------- |
| `Task<Response?>` |



## **License**

[MIT](LICENSE) Copyright 2023

## **Contributing**

Contributions are always welcome!

See `contributing.md` for ways to get started

## **Code Of Conduct**
Please adhere to this project's 
[Code of Conduct](code_of_conduct.md) .
