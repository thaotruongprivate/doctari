interface AddressInterface {
    streetName: string,
    houseNumber: string,
    postcode: string,
    city: string,
    country: string
}

class AddressFormatter {

    private address: AddressInterface;

    constructor(address: AddressInterface) {
        this.address = address;
    }

    outputCommaFormat() {
        return `${this.address.streetName} ${this.address.houseNumber}, ${this.address.postcode} ${this.address.city}, ${this.address.country}`;
    }
}

export default AddressFormatter;