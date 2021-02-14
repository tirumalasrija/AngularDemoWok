
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../../../auth/store/auth.reducers';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../store/app.reducers';
import { Customer, Representative, Consultant, Technology, User } from "../../../customer";
import { CustomerService } from "../../../customer.service";
import { Table } from 'primeng/table';
import { ConsultantDetail } from '../../../product';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import {SelectItem} from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  title = 'Webmobilez';
  isAuthnoticated: Observable<State>;
  consultantForm: FormGroup;
  customers: Consultant[];
  consultants: Consultant[];
  representatives: Representative[];
  technologies: Technology[];
  technologiesforflter: Technology[];
  User: User[];
  statuses: any[];
  visaTypes: any[];
  states: any[];
  priority: any[];
  resources: any[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  consultant: Consultant;
  submitted: boolean;
  consultantDialog: boolean;
  msgs: Message[] = [];
  position: string;
  successResult: any;
  serverErrors: any;
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private store: Store<AuthState>, private consultantService: CustomerService) {

  }

  get first_name() { return this.consultantForm.get('first_name'); }
  get last_name() { return this.consultantForm.get('last_name'); }
  get consultant_email() { return this.consultantForm.get('consultant_email'); }
  get visaType() { return this.consultantForm.get('visaType'); }
  get consultant_mobile_number() { return this.consultantForm.get('consultant_mobile_number'); }
  get technology_id() { return this.consultantForm.get('technology_id'); }
  get rate() { return this.consultantForm.get('rate'); }

  get city() { return this.consultantForm.get('city'); }
  get state() { return this.consultantForm.get('state'); }
  get willingLocation() { return this.consultantForm.get('willingLocation'); }
  get documentsCollected() { return this.consultantForm.get('documentsCollected'); }
  get resource() { return this.consultantForm.get('resource'); }
  get ssn() { return this.consultantForm.get('ssn'); }
  get bestContactNumber() { return this.consultantForm.get('bestContactNumber'); }
  get linkedInUrl() { return this.consultantForm.get('linkedInUrl'); }
  get skypeId() { return this.consultantForm.get('skypeId'); }
  get comments() { return this.consultantForm.get('comments'); }
  get note() { return this.consultantForm.get('note'); }
  get consultant_status() { return this.consultantForm.get('consultant_status'); }
  get experience() { return this.consultantForm.get('experience'); }
  get availabity() { return this.consultantForm.get('availabity'); }
  get resume() { return this.consultantForm.get('resume'); }
  get otherDocument() { return this.consultantForm.get('otherDocument'); }
  get workAuthorization() { return this.consultantForm.get('workAuthorization'); }

  ngOnInit(): void {

    console.log(this.consultantForm);
    this.isAuthnoticated = this.store.select('authState');

    this.consultantForm = new FormGroup({
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'last_name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'consultant_email': new FormControl(null, [Validators.required, Validators.email]),
      'consultant_mobile_number': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'technology_id': new FormControl("", [Validators.required]),
      'rate': new FormControl(null, [Validators.required]),
      'visaType': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required]),
      'state': new FormControl(null, [Validators.required]),
      'willingLocation': new FormControl(null),
      'documentsCollected': new FormControl(null),
      'resource': new FormControl(null),
      'ssn': new FormControl(null, [Validators.required]),
      'bestContactNumber': new FormControl(null),
      'linkedInUrl': new FormControl(null),
      'skypeId': new FormControl(null),
      'comments': new FormControl(null),
      'note': new FormControl(null),
      'consultant_status': new FormControl(null, [Validators.required]),
      'experience': new FormControl(null, [Validators.required]),
      'availabity': new FormControl(null),
      'priority': new FormControl(null),
      'resume': new FormControl(null),
      'otherDocument': new FormControl(null),
      'workAuthorization': new FormControl(null)
    })
    this.consultantService.getCustomersLarge().then(consultants => {
      this.consultants = consultants;
      this.loading = false;

    });
    this.consultantService.getTechnologies().then(technologies => {
      //this.technologies.push({ technology_id:0,name:'Choose Technology',created_at:'' });
      this.technologies=technologies;

    });
    this.consultantService.getOnlyTechnologies().then(technologies => {
      //this.technologies.push({ technology_id:0,name:'Choose Technology',created_at:'' });
      this.technologiesforflter=technologies;

    });

    this.visaTypes = [
      { name: "Choose VisaType", value: '' },
      { name: "H4 EAD", value: "H4 EAD" },
      { name: "H1B-Transfer", value: "H1B-Transfer" },
      { name: "CPT", value: "CPT" },
      { name: "OPT", value: "OPT" },
      { name: "H1-B", value: "H1-B" },
      { name: "GC-EAD", value: "GC-EAD" },
      { name: "Green Card", value: "Green Card" },
      { name: "US Citizen", value: "US Citizen" }

    ];
    this.states = [
      { name: "Choose State", value: '' },
      { name: "Michigan", value: "Michigan" },
      { name: "NewYork", value: "NewYork" },
    ];
    this.priority = [
      { name: "Low", value: 'Low' },
      { name: "Medium", value: "Medium" },
      { name: "High", value: "High" },
    ];
    this.resources = [
      { name: "Choose Resource", value: '' },
      { name: "LinkedIn", value: 'LinkedIn' },
      { name: "Dice", value: "Dice" },
      { name: "Noukari", value: "Noukari" },
    ];
    this.statuses = [
      { label: "Choose Status", value: '' },
      { label: "Interested", value: 'Interested' },
      { label: "not interested", value: "not interested" },
      { label: "Not responding", value: "Not responding" },
      { label: "need to discuss", value: "need to discuss" },
      { label: "Employer lift the call", value: "Employer lift the call" },
      { label: "Waiting for documents", value: "Waiting for documents" }
    ];



  }




  clear(table: Table) {
    table.clear();
  }

  //create Consultant
  openNew() {
    this.consultantForm.reset();
    this.consultant = {};
    this.submitted = false;
    this.consultantDialog = true;
  }
  updateConsultantDetails() {

    if (this.consultantForm.valid) {
      this.submitted = true;
    } else {
      this.submitted = false;
    }

    if (this.consultant.consultant_id) {
      this.consultantService.updateUser(this.consultantForm, this.consultant.consultant_id).subscribe(data => {
        this.successResult = data;

        this.consultants[this.findIndexById(data.consultant.consultant_id)] = data.consultant;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Consultant Updated', life: 3000 });
      }, err => {
        this.serverErrors = err.error;
      });
      // this.consultants[this.findIndexById(this.consultant.consultant_id)] = this.consultant;


    }
    else {


      this.consultantService.updateConsultant(this.consultantForm).subscribe(data => {
        this.consultantForm.reset();
        this.successResult = data;
        this.consultants.push(data.consultant);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Consultant Created', life: 3000 });
        //  this.consultantForm.reset();
        console.log(data);
      }, err => {
        this.serverErrors = err.error;
      });
      // this.consultant.consultant_id = this.createId();


    }

    this.consultants = [...this.consultants];
    this.consultantDialog = false;
    this.consultant = {};

  }
  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.consultants.length; i++) {
      if (this.consultants[i].consultant_id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
  hideDialog() {
    console.log(this.consultantForm);
    this.consultantDialog = false;
    this.submitted = false;
  }
  editProduct(consultantObj: Consultant) {
    this.consultantForm.patchValue({ ...consultantObj });
    this.consultant = { ...consultantObj };
     this.consultantDialog = true;
  }
  deleteProduct(consultantObj: Consultant) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + consultantObj.first_name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.consultants = this.consultants.filter(val => val.consultant_id !== consultantObj.consultant_id);
        //this.consultant = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Consultant Deleted', life: 3000 });
      }
    });
  }



  confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Successful Approved', detail: 'Consultant Approved to HotList', life: 3000 });
        //  this.msgs = [{severity:'info', summary:'Confirmed', detail:'Holtlisted'}];
      },
      reject: () => {
        //this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      },
      key: "positionDialog"
    });
  }





}
