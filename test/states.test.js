const CountryRegion = require("..");
const { ONE, NAME, ID, INVALID_LGA_VALUE: INVALID_VALUE } = require("../Utilities/constants");
const countryRegion = new CountryRegion();

test('getStates returns an array of objects for a valid country ID', async () => {
    const countryId = ONE;
    const states = await countryRegion.getStates(countryId);

    expect(Array.isArray(states)).toBe(true);

    states.forEach(state => {
        expect(state).toHaveProperty(NAME);
        expect(state).toHaveProperty(ID);
    });
});

test('getStates returns `null` for an invalid country ID', async () => {
    const countryId = INVALID_VALUE;
    const states = await countryRegion.getStates(countryId);

    expect(states).toBeNull();
});

test('getState returns an object with `name` and `id` properties for a valid state ID', async () => {
    const countryId = ONE;
    const stateId = ONE;
    const state = await countryRegion.getState(countryId, stateId);

    expect(state).toHaveProperty(NAME);
    expect(state).toHaveProperty(ID);
});

test('getState returns `null` for an invalid state ID', async () => {
    const countryId = ONE;
    const stateId = INVALID_VALUE;
    const state = await countryRegion.getState(countryId, stateId);

    expect(state).toBeNull();
});

