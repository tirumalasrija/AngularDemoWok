import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';
import { RouterModule } from '@angular/router';
import { consultantsRoutes } from  './consultants-routing.module'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonsModule, InputUtilitiesModule, InputsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConsultantListComponent } from './submission-list/consultant-list.component';
import {ClientsListComponent} from './clients-list/clients-list.component';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {CompaniesListComponent} from './companies-list/companies-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserCreateComponent} from './user-create/user-create.component';
import { CustomerService } from '../../customer.service';
import {AccordionModule} from 'primeng/accordion';
import { ProductService } from '../../product.service';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {BadgeModule} from 'primeng/badge';
import {InputMaskModule} from 'primeng/inputmask';
import {KeyFilterModule} from 'primeng/keyfilter';
import {DividerModule} from 'primeng/divider';
import {TooltipModule} from 'primeng/tooltip';
import { UserRestService } from './user-rest.service';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {FieldPipe3} from '../../field3.pipe';
 @NgModule({
  declarations: [ConsultantListComponent,CompaniesListComponent,ClientsListComponent,ContactsListComponent,UserListComponent,UserCreateComponent,FieldPipe3],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(consultantsRoutes),
    ButtonsModule,
    InputUtilitiesModule,
    InputsModule,
    FormsModule,
    AccordionModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,

    FileUploadModule,
    ToolbarModule,
    RatingModule,
    BadgeModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputMaskModule,
    KeyFilterModule,
    DividerModule,TooltipModule,OverlayPanelModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [ProductService, MessageService, ConfirmationService,CustomerService,UserRestService,  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],

  exports: [
    RouterModule
  ]
})
export class SubmissionModule { }
