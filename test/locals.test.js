const CountryRegion = require("..");
const { ONE, COUNTRY_WITH_VALID_LOCALS, INVALID_LGA_VALUE, NAME, ID } = require("../Utilities/constants");
const countryRegion = new CountryRegion();

test('getLGAs returns an array of objects for a valid state ID and country Id', async () => {
    const countryId = COUNTRY_WITH_VALID_LOCALS;
    const stateId = ONE;
    const lgas = await countryRegion.getLGAs(countryId, stateId);

    expect(Array.isArray(lgas)).toBe(true);

    lgas.forEach(lga => {
        expect(lga).toHaveProperty(NAME);
        expect(lga).toHaveProperty(ID);
    });
});

test('getLGAs returns null for a country that does not have a list state-locals', async () => {
    const countryId = ONE;
    const stateId = ONE;
    const lgas = await countryRegion.getLGAs(countryId, stateId);

    expect(lgas).toBeNull();
});

test('getLGA returns an object with `name` and `id` properties for a valid LGA ID', async () => {
    const countryId = COUNTRY_WITH_VALID_LOCALS;
    const stateId = ONE;
    const lgaId = ONE;
    const lga = await countryRegion.getLGA(countryId, stateId, lgaId);

    expect(lga).toHaveProperty(NAME);
    expect(lga).toHaveProperty(ID);
});

test('getLGA returns `null` for an invalid LGA ID', async () => {
    const countryId = ONE;
    const stateId = ONE;
    const lgaId = INVALID_LGA_VALUE;
    const lga = await countryRegion.getLGA(countryId, stateId, lgaId);

    expect(lga).toBeNull();
});