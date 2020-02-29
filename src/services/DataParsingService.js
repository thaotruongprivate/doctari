class DataParsingService {
    parseData(text) {
        const data = [];
        const persons = text.split(/\r?\n\r?\n/);
        for (const person of persons) {
            const nameAndAddress = person.split(/\r?\n/);
            const name = nameAndAddress[0];
            const address = `${nameAndAddress[1]}, ${nameAndAddress[2]}`;
            data.push({
                name,
                address
            });
        }
        return data;
    }
}

export default DataParsingService;