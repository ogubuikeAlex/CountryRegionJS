import axios from 'axios';
import { RESOURCE_URL } from './utilities/constants.js';

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

    getStates = async (countryId) =>
        (await this._getBlob())
            .data.find(item => item?.country?.id == countryId)
            ?.country?.states ?? null;

    getState = async (countryId, stateId) =>
        (await this._getBlob())
            .data.find(item => item?.country?.id == countryId)
            ?.country?.states?.find(item => item?.id == stateId) ?? null;

    getLGAs = async (countryId, stateId) =>
        (await this._getBlob())
            .data.find(item => item?.country?.id == countryId)
            ?.country?.states?.find(item => item?.id == stateId)?.locals ?? null;

    getLGA = async (countryId, stateId, lgaId) =>
        (await this._getBlob())
            .data.find(item => item?.country?.id == countryId)
            .country?.states.find(item => item?.id == stateId)
            ?.locals?.find(item => item?.id == lgaId) ?? null;
}

export default CountryRegion;