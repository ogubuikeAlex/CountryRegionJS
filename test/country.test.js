const CountryRegion = require("..");
const { NAME, ID, ONE, INVALID_LGA_VALUE: INVALID_VALUE } = require("../Utilities/constants");

const countryRegion = new CountryRegion();
test('getCountries returns an array of objects with `name` and `id` properties', async () => {
    const countries = await countryRegion.getCountries();

    expect(Array.isArray(countries)).toBe(true);

    countries.forEach(country => {
        expect(country).toHaveProperty(NAME);
        expect(country).toHaveProperty(ID);
    });
});

test('getCountry returns an object with `name` and `id` properties for a valid country ID', async () => {
  const id = ONE;
  const country = await countryRegion.getCountry(id);

  expect(country).toHaveProperty(NAME);
  expect(country).toHaveProperty(ID);
});

test('getCountry returns `null` for an invalid country ID', async () => {
  const id = INVALID_VALUE;
  const country = await countryRegion.getCountry(id);

  expect(country).toBeNull();
});
