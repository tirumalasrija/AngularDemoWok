import { Routes } from '@angular/router';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {TechnologiesListComponent} from './technologies-list/technologies-list.component';
import {HotListComponent} from './hot-list/hot-list.component';
export const consultantsRoutes: Routes = [
  {
    path: '',
    component: ConsultantListComponent
  },
  {
    path: 'list',
    component: ConsultantListComponent
  },
  {
    path: 'create',
    component: WelcomeComponent
  },
  {
    path: 'technologies',
    component: TechnologiesListComponent
  },
  {
    path: 'hotlist',
    component: HotListComponent
  }
];

