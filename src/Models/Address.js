class Address {

    constructor(fullAddress, state) {
        this.fullAddress = fullAddress;
        this.federalState = state;
    }

    getFullAddress() {
        return this.fullAddress;
    }

    getFederalState() {
        return this.federalState;
    }
}

export default Address;