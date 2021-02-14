import { Routes } from '@angular/router';
import { DocumentListComponent } from './document-list/documents-list.component';

export const documentsRoutes: Routes = [
  {
    path: '',
    component: DocumentListComponent
  },

  {
    path: 'list',
    component: DocumentListComponent
  }
];

