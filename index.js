const axios = require('axios');
const { RESOURCE_URL } = require('./Utilities/constants');

class CountryRegion {
    blob = null;
    _getBlob = async () => {
        return this.blob ??= await axios.get(`${RESOURCE_URL}`);
    }

    getCountries = async () =>
        (await this._getBlob()).data.map(item => {
            return {
                name: item?.country?.name,
                id: item?.country?.id
            }
        });

    getCountry = async (id) => {
        const country = (await this._getBlob())
            .data.find(item => item?.country?.id == id);

        if (!country) return null;
        return {
            name: country?.country?.name,
            id: country?.country?.id
        }
    }
}

module.exports = CountryRegion;