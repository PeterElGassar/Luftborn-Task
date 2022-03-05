import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { NgOtpInputModule } from 'ng-otp-input';
import { AddEditMediaComponent } from './dashboard/add-edit-media/add-edit-media.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primeng
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { CompaniesProfileComponent } from './dashboard/companies-profile/companies-profile.component';
import {DropdownModule} from 'primeng/dropdown';
import { RegisterComponent } from './login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddEditMediaComponent,
    CompaniesProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
   
    NgOtpInputModule,
    ReactiveFormsModule,

    CalendarModule,
    InputMaskModule,
    InputMaskModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
