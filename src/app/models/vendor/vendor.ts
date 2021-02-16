import { VendorContact } from "./vendor-contact";

export class Vendor {
    constructor(public name: string) { }
}

export class VendorViewModel {
    vendor: Vendor;
    contact: VendorContact;

    constructor(name: string, contactName: string, contactMobile: string, contactEmail: string, contactExt: string) {
        this.vendor = new Vendor(name);
        this.contact = new VendorContact(contactName, contactMobile, contactEmail, contactExt);
    }
}