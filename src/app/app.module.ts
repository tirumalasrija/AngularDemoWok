import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotfoundComponent } from './errors/notfound/notfound.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MDBBootstrapModule, InputUtilitiesModule, CheckboxModule, IconsModule } from 'angular-bootstrap-md';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StudyComponent } from './study/study.component';
import { ChildStudyComponent } from './study/child-study/child-study.component';
import { AuthEffects } from './auth/store/auth.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CanUserAccessDirective } from './core/directives/can-user-access.directive';

@NgModule({
  declarations: [
    AppComponent,

    NotfoundComponent,
    StudyComponent,
    ChildStudyComponent,
    CanUserAccessDirective
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,



    HttpClientModule,
    FormsModule,

    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
  ],
  

  bootstrap: [AppComponent]
})
export class AppModule { }
