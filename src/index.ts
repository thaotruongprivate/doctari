import readFile from './utils/readFile';
import DataParsingService from "./services/DataParsingService";
import GermanAddress from "./models/GermanAddress";
import AddressFormatter from "./services/AddressFormatter";

readFile('../data/testdaten.txt').then(async (content: string) => {
    const dataParsingService = new DataParsingService();
    const persons = dataParsingService.parsePersons(content);
    for (const person of persons) {
        const address = new GermanAddress(
            person.address.streetName,
            person.address.houseNumber,
            person.address.postcode,
            person.address.city);

        const addressFormatter = new AddressFormatter(address);
        const state = await address.getState();
        const app = document.getElementById('root');
        const p = document.createElement('p');
        p.innerText = `Name: ${person.name}, 
address: ${addressFormatter.outputCommaFormat()}, 
state: ${state}`;
        app.appendChild(p);
    }
});
