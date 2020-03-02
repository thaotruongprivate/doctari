import readFile from './utils/readFile';
import DataParsingService from "./services/DataParsingService";
import $ from 'jquery';
import GermanAddress from "./models/GermanAddress";

readFile('../data/testdaten.txt').then(async (content: string) => {
    const dataParsingService = new DataParsingService();
    const persons = dataParsingService.parsePersons(content);
    for (const person of persons) {
        const address = new GermanAddress(
            person.address.streetName,
            person.address.houseNumber,
            person.address.postcode,
            person.address.city);

        const state = await address.getState();
        $('#root tbody').append(`
            <tr>
                <td>${person.name}</td>
                <td>${address.streetName} ${address.houseNumber}, ${address.postcode} ${address.city}</td>
                <td>${state}</td>
            </tr>`);
    }
});
