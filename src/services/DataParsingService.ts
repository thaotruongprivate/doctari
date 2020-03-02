import GermanAddress from "../models/GermanAddress";

class DataParsingService {
    parsePersons(text: string) {
        const data = [];
        const persons = text.split(/\r?\n\r?\n/);
        for (const person of persons) {
            const nameAndAddress = person.split(/\r?\n/);
            const name = nameAndAddress[0];
            const addressParts = this._parseAddress(nameAndAddress[1], nameAndAddress[2]);
            const address = new GermanAddress(addressParts.streetName,
                addressParts.houseNumber,
                addressParts.postcode,
                addressParts.city);
            data.push({
                name,
                address
            });
        }
        return data;
    }

    _parseAddress(streetAddress: string, postcodeAndCity: string) {
        let streetName, houseNumber, postcode, city;
        [streetName, houseNumber] = this._parseStreetNameAndHouseNumber(streetAddress);
        [postcode, city] = this._parsePostcodeAndCity(postcodeAndCity);
        return {
            streetName,
            houseNumber,
            postcode,
            city
        };
    }

    _parseStreetNameAndHouseNumber(streetAddress: string) {
        const parts = streetAddress.split(' ');
        const houseNumber = parts.pop();
        const streetName = parts.join(' ');
        return [streetName, houseNumber];
    }

    _parsePostcodeAndCity(postcodeAndCity: string) {
        const parts = postcodeAndCity.split(' ');
        const postcode = parts.shift();
        const city = parts.join(' ');
        return [postcode, city];
    }
}

export default DataParsingService;