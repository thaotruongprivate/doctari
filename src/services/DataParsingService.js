class DataParsingService {
    parsePersons(text) {
        const data = [];
        const persons = text.split(/\r?\n\r?\n/);
        for (const person of persons) {
            const nameAndAddress = person.split(/\r?\n/);
            const name = nameAndAddress[0];
            const address = this._parseAddress(nameAndAddress[1], nameAndAddress[2]);
            data.push({
                name,
                address
            });
        }
        return data;
    }

    _parseAddress(streetAddress, postcodeAndCity) {
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

    _parseStreetNameAndHouseNumber(streetAddress) {
        const parts = streetAddress.split(' ');
        const houseNumber = parts.pop();
        const streetName = parts.join(' ');
        return [streetName, houseNumber];
    }

    _parsePostcodeAndCity(postcodeAndCity) {
        const parts = postcodeAndCity.split(' ');
        const postcode = parts.shift();
        const city = parts.join(' ');
        return [postcode, city];
    }
}

export default DataParsingService;