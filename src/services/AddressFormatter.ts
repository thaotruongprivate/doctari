import Address from "../models/Address";

class AddressFormatter {

    private address: Address;

    constructor(address: Address) {
        this.address = address;
    }

    outputCommaFormat() {
        return `${this.address.streetName} ${this.address.houseNumber}, ${this.address.postcode} ${this.address.city}`;
    }
}

export default AddressFormatter;