import axios from "axios";
import config from "../../config";

class Address {

    constructor(streetName, houseNumber, postcode, city, country = 'Germany') {
        this._streetName = streetName;
        this._houseNumber = houseNumber;
        this._postcode = postcode;
        this._city = city;
        this._country = country;
        this._state = '';
    }

    get streetName() {
        return this._streetName;
    }

    get houseNumber() {
        return this._houseNumber;
    }

    get postcode() {
        return this._postcode;
    }

    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }

    async getState() {
        if (!this._state) {
            const response = await axios.get(this._getApiEndpoint());
            if (response.data.results.length > 0) {
                for (const component of response.data.results[0].address_components) {
                    if (component.types.includes('administrative_area_level_1')) {
                        return component.long_name;
                    }
                }
            }
        }

        return this._state;
    }

    _getApiEndpoint() {
        return `https://maps.googleapis.com/maps/api/geocode/json?address=${this._postcode}+${this._city}+${this._country}&key=${config.google_api_key}`;
    }
}

export default Address;