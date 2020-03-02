import Address from "./Address";
import axios from "axios";
import config from "../../config";

class GermanAddress extends Address {
    _state = '';

    constructor(streetName: string, houseNumber: string, postcode: string, city: string) {
        super(streetName, houseNumber, postcode, city, 'Germany');
    }

    async getState() {
        if (!this._state) {
            const response = await axios.get(this._getApiEndpoint());
            if (response.data.results.length > 0) {
                for (const component of response.data.results[0].address_components) {
                    if (component.types.includes('administrative_area_level_1') && component.long_name.length > 0) {
                        this._state = component.long_name;
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

export default GermanAddress;