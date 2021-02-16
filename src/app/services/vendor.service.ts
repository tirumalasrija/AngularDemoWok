import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VendorViewModel } from '../models/vendor/vendor';
import { VendorContact } from '../models/vendor/vendor-contact';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  saveVendor(vendorDetails: VendorViewModel) {
    return this.http.post(`${environment.api}/api/vendor-company-contacts`, {
      name: vendorDetails.vendor.name,
      contactName: vendorDetails.contact.name,
      contactMobile: vendorDetails.contact.mobile,
      contactEmail: vendorDetails.contact.email,
      ext: vendorDetails.contact.ext
    });
  }

  saveVendorContact(vendorId: number, vendorContact: VendorContact) {
    return this.http.post(`${environment.api}/api/contacts`, {
      vendor_company_id: vendorId,
      contactName: vendorContact.name,
      contactMobile: vendorContact.mobile,
      contactEmail: vendorContact.email
    });
  }
}
