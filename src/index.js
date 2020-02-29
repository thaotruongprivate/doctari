import readFile from './utils/readFile';
import DataParsingService from "./services/DataParsingService";
import $ from 'jquery';
import GoogleAddressService from "./services/GoogleAddressService";

readFile('../data/testdaten.txt').then(async (content) => {
    const dataParsingService = new DataParsingService();
    const googleAddressService = new GoogleAddressService();
    const persons = dataParsingService.parseData(content);
    for (const person of persons) {
        const address = await googleAddressService.createAddress(person.address);
        if (address) {
            $('#root tbody').append(`
                <tr>
                    <td>${person.name}</td>
                    <td>${address.getFullAddress()}</td>
                    <td>${address.getFederalState()}</td>
                </tr>`);
        }
    }
});
