import CountryRegion from "../index.js";

const countryRegion = new CountryRegion();

//get all countries
const getCountries = async () => await countryRegion.getCountries();

const countries = await getCountries()

console.log({ countries });
