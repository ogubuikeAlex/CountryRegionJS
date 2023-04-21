![CountryRegion A cascading dropdown for loading countries and associated states and local governments.](https://raw.githubusercontent.com/Slimcent/CountryRegion/master/images/CountryRegion.png)

# CountryRegion

A cascading dropdown for loading countries and associated states and local governments.

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

stable release version: ![version](https://img.shields.io/badge/version-1.0.10-blue)


Nuget package downloads: ![downloads](https://img.shields.io/badge/downloads-2.9K-brightgreen)

## Tech Stack

**C#, .Net6.0, .NetStandard2.1**, 


## How Do I Get Started

First, install NuGet. Then, install CountryRegion from the package manager console:

```C#   
   NuGet\Install-Package CountryRegion -Version 1.0.10
```
 This command is intended to be used within the Package Manager Console in Visual Studio, as it uses the NuGet module's version of Install-Package.


Or from the .NET CLI as:
```C#   
   dotnet add package CountryRegion --version 1.0.10
```

Finally, import into the file:
```C#   
   using CountryRegion;
```

## Features
- Get all countries
- Get all states
- Get all local governments
- Get a country
- Get a state
- Get a local government

## Sample usage

```C#
   await Region.Countries();
```

- Output

| Type     |
| :------- |
| `Task<IEnumerable<Response?>>` |

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



## Thanks to all Contributors

Maintainers:

- [slimcent](https://github.com/Slimcent) 
- [king-Alex-d-great](https://github.com/king-Alex-d-great)
- [sixxxxxxxxxxx](https://github.com/sixxxxxxxxxxx)
- [bubethedev](https://github.com/bubethedev)
- [dabz-codes](https://github.com/dabz-codes)
- [albert-tarkaa](https://github.com/albert-tarkaa)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
