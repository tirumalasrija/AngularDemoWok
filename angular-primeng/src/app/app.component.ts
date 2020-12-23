import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  items: MenuItem[];
  constructor() {
    // Initialization inside the constructor
    this.items = [
      {
          label: 'Home',
          routerLink: "/",

      },
      {
          label: 'Users',
          icon: 'pi pi-fw pi-user',
          items: [
              {label: 'List',routerLink: "/users" },
              {label: 'Add User',routerLink: "/users/add"}
          ]
      }
  ];
 }
} 
