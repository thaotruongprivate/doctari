import axios from 'axios';
import Address from "../Models/Address";
import config from "../../config";

class GoogleAddressService {

    async createAddress(fullAddress) {
        const response = await axios.get(this.getApiEndpoint(fullAddress));
        if (response.data.results.length > 0) {
            return new Address(fullAddress, GoogleAddressService.getStateFromGoogleResponse(response));
        }
        return null;
    }

    static getStateFromGoogleResponse(response) {
        for(const component of response.data.results[0].address_components) {
            if (component.types.includes('administrative_area_level_1')) {
                return component.long_name;
            }
        }
        return '';
    }

    getApiEndpoint(addressText) {
        return `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(addressText)}&key=${config.google_api_key}`;
    }
}

export default GoogleAddressService;