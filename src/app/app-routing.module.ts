import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './errors/notfound/notfound.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './admin/dashboard.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardGaurdGuard } from './admin/dashboard-gaurd.guard';
import { StudyComponent } from './study/study.component';

const routes: Routes = [
  /*{
    path: '',
    component: WelcomeComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }, */
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [DashboardGaurdGuard],
    children:[
      {
        path:'',
        loadChildren: () => import('./admin/dashboard.module').then(m => m.DashboardModule),
      }
    ]
  },
  {
    path:'study',
    component: StudyComponent
  },

  {
    path: 'consultants',
    data: {
      expectedRole: 'HeadHuntersAdmin'
    },
    loadChildren: () => import('./admin/consultants/consultants.module').then(m => m.ConsultantsModule),
  },
  {
    path: 'documents',
    data: {
      expectedRole: 'HeadHuntersAdmin'
    },
    loadChildren: () => import('./admin/documents/documents.module').then(m => m.DocumentsModule),
  },
  {
    path: 'submissions',
    data: {
      expectedRole: 'HeadHuntersAdmin'
    },
    loadChildren: () => import('./admin/submissions/submission.module').then(m => m.SubmissionModule),
  },

];

@NgModule({
imports: [
  RouterModule.forRoot(routes,{
    useHash: true
  }),
  AuthModule,
  DashboardModule
],

exports: [RouterModule,AuthModule,DashboardModule]
})
export class AppRoutingModule { }
