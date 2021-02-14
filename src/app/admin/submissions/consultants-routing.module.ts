import { Routes } from '@angular/router';
import { ConsultantListComponent } from './submission-list/consultant-list.component';

import {ClientsListComponent} from './clients-list/clients-list.component';
import {CompaniesListComponent} from './companies-list/companies-list.component';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserCreateComponent} from './user-create/user-create.component';

export const consultantsRoutes: Routes = [
  {
    path: '',
    component: ConsultantListComponent
  },
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  },
  {
    path: 'clients',
    component: ClientsListComponent
  },
  {
    path: 'companies',
    component: CompaniesListComponent
  },
  {
    path: 'contacts',
    component: ContactsListComponent
  },
];

