import Address from "./Address";
import axios from "axios";

class GermanAddress extends Address {
    private _state: string;

    constructor(streetName: string, houseNumber: string, postcode: string, city: string) {
        super(streetName, houseNumber, postcode, city, 'Germany');
        this._state = undefined;
    }

    async getState() {
        if (this._state === undefined) {
            const response = await axios.get(this._getApiEndpoint());
            if (response.data.results.length > 0) {
                for (const component of response.data.results[0].address_components) {
                    if (component.types.includes('administrative_area_level_1')) {
                        this._state = component.long_name;
                    }
                }
            } else {
                this._state = '';
            }
        }
        return this._state;
    }

    _getApiEndpoint() {
        return `https://maps.googleapis.com/maps/api/geocode/json?address=${this.postcode}+${this.city}+${this.country}&key=${process.env.GOOGLE_API_KEY}`;
    }
}

export default GermanAddress;