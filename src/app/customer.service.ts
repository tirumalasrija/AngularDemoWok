import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultant, Technology, HotList, Client, Contact, Submission, PagedConsultant } from './customer';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) { }
  getConsultantsOnly(): Observable<any> {
    return this.http.get(`${environment.api}/api/getConsultantsOnly`);
  }
  getCustomersLarge() {
    return this.http.get<any>(`${environment.api}/api/consultants`)
      .toPromise()
      .then(res => <Consultant[]>res.consultants)
      .then(data => { return data; });
  }
  getDocumentConsultants(page, size) {
    return this.http.get<any>(`${environment.api}/api/consultants?page=${page}&take=${size}`)
      .toPromise()
      .then(res => {
        return <PagedConsultant>{
          consultants: res.data.data,
          totalRecords: res.data.total
        };
      })
      .then(data => { return data; });
  }

  getConsultantSubmissions(consultantId: number) {
    return this.http.get<any>(`${environment.api}/api/consultant/${consultantId}/submissions`);
  }

  getHotlistConsultants() {
    return this.http.get<any>(`${environment.api}/api/getHotList`)
      .toPromise()
      .then(res => <Consultant[]>res.hotlist)
      .then(data => { return data; });
  }
  getExportConsultants() {
    return this.http.get<any>(`${environment.api}/api/getExportHotList`)
      .toPromise()
      .then(res => <HotList[]>res.exportlist)
      .then(data => { return data; });
  }

  getTechnologies() {
    return this.http.get<any>(`${environment.api}/api/technologies`)
      .toPromise()
      .then(res => <Technology[]>res.technologies)
      .then(data => { return data; });
  }
  getOnlyTechnologies() {
    return this.http.get<any>(`${environment.api}/api/getOnlyTechnologies`)
      .toPromise()
      .then(res => <Technology[]>res.technologies)
      .then(data => { return data; });
  }

  getConsultantsDetails(): Observable<Consultant> {
    return this.http.get<Consultant>(`${environment.api}/api/consultants`);
  }

  updateConsultant(profile): Observable<any> {
    return this.http.post(`${environment.api}/api/consultants`, profile.value);
  }
  updateUser(form, id): Observable<any> {
    return this.http.put(`${environment.api}/api/consultants/` + id, form.value);
  }
  updateTechnology(form, id): Observable<any> {
    return this.http.put(`${environment.api}/api/technologies/` + id, form.value);
  }
  storeTechnology(form): Observable<any> {
    return this.http.post(`${environment.api}/api/technologies`, form.value);
  }


  updateClient(form, id): Observable<any> {
    return this.http.put(`${environment.api}/api/clients/` + id, form.value);
  }
  getClients() {
    return this.http.get<any>(`${environment.api}/api/clients`)
      .toPromise()
      .then(res => <Client[]>res.clients)
      .then(data => { return data; });
  }
  storeClient(form): Observable<any> {
    return this.http.post(`${environment.api}/api/clients`, form.value);
  }

  updateCompany(form, id): Observable<any> {
    return this.http.put(`${environment.api}/api/companies/` + id, form.value);
  }
  getCompanies() {
    return this.http.get<any>(`${environment.api}/api/companies`)
      .toPromise()
      .then(res => <Client[]>res.companies)
      .then(data => { return data; });
  }
  storeCompany(form): Observable<any> {
    return this.http.post(`${environment.api}/api/companies`, form.value);
  }

  updateContact(form, id): Observable<any> {
    return this.http.put(`${environment.api}/api/contacts/` + id, form.value);
  }
  getContacts() {
    return this.http.get<any>(`${environment.api}/api/contacts`)
      .toPromise()
      .then(res => <Contact[]>res.contacts)
      .then(data => { return data; });
  }
  storeContact(form): Observable<any> {
    return this.http.post(`${environment.api}/api/contacts`, form.value);
  }
  getSubmissions() {
    return this.http.get<any>(`${environment.api}/api/submissions`)
      .toPromise()
      .then(res => <Submission[]>res.submissions)
      .then(data => { return data; });
  }
  updateSubmission(form, id): Observable<any> {
    return this.http.put(`${environment.api}/api/submissions/` + id, form.value);
  }

}
