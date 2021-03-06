class Address {
    protected _streetName: string;
    protected _houseNumber: string;
    protected _postcode: string;
    protected _city: string;
    protected _country: string;

    constructor(streetName: string, houseNumber: string, postcode: string, city: string, country: string) {
        this._streetName = streetName;
        this._houseNumber = houseNumber;
        this._postcode = postcode;
        this._city = city;
        this._country = country;
    }

    get streetName() {
        return this._streetName;
    }

    get houseNumber() {
        return this._houseNumber;
    }

    get postcode() {
        return this._postcode;
    }

    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }
}

export default Address;