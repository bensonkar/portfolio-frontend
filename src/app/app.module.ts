import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './layouts/test/test.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { UsersComponent } from './layouts/system-users/users/users.component';
import { DataTablesModule } from 'angular-datatables';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppReportsComponent } from './layouts/reports/app-reports/app-reports.component';
import { RolesComponent } from './layouts/roles/roles.component';
import { WorkgroupsComponent } from './layouts/workgroup/workgroups/workgroups.component';
import { CreateUserComponent } from './layouts/system-users/create-user/create-user.component';
import { ApproveUserComponent } from './layouts/system-users/approve-user/approve-user.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    declarations: [AppComponent, TestComponent, DashboardComponent, LoginComponent, VerifyOtpComponent, UsersComponent, ChangePasswordComponent, ForgotPasswordComponent, AppReportsComponent, RolesComponent, WorkgroupsComponent, CreateUserComponent, ApproveUserComponent],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        HttpClientModule,
        AppCommonModule,
        NavigationModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        DataTablesModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        NgxChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
