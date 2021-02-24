export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: boolean;
}
export interface User {
  id?: number;
  name?: string;
  email?: string;
  created_at?: string;
  password?: string;

}
export interface Technology {
  technology_id?: number;
  name?: string;
  created_at?: string;

}
export interface Client {
  client_id?: number;
  name?: string;
  created_at?: string;

}
export interface Contact {
  vendor_company_contact_id ?: number;
  contactName?: string;
  contactMobile?: string;
  contactEmail?: string;
  vendor_company_id ?: Company;
  created_at?: string;

}
export interface Company {
  vendor_company_id ?: number;
  name?: string;
  created_at?: string;

}
export interface Submission {
  submission_id ?: number;
  userId?: User;
  consultant_id?: Consultant;
  vendor_company_contact_id ?: Contact;
  submissionRate ?: string;
  actualRate ?: string;
  timezone ?: string;
  comments ?: string;
  submissionStatus ?: string;


}
export interface HotList
{
  consultant_id?: number;
  first_name?: string;
  technology?:string;
  visaType?: string;
  state?: string;
  willingLocation?: string;
  experience?: number;
}
export interface Consultant {
  consultant_id?: number;
  first_name?: string;
  last_name?: string;
  name?: string;
  consultant_email?: string;
  consultant_mobile_number?: string;
  technology_id?:number;
  technologies?: Technology;
  rate?: number;
  experience?: number;
  visaType?: string;
  city?: string;
  state?: string;
  willingLocation?: string;
  documentsCollected?: string;
  resource?: string;
  ssn?: string;
  bestContactNumber?: string;
  linkedInUrl?: string;
  skypeId?: string;
  availability?: string;
  priority?: string;
  comments?: string;
  note?: string;
  consultant_status?: string;
  admin_status?: string;
  user_status?: string;
  portal_status?: string;
  employeePortalAccess?: string;
  users?: User;
  date?: string | Date;
  created_at?: string | Date;
}


export interface PagedConsultant {
  totalRecords: number;
  consultants: Consultant[];
}