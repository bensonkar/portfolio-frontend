import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardsComponent } from './dashboards/dashboards.component';

export const containers = [LoginComponent, RegisterComponent, ForgotPasswordComponent,DashboardsComponent];

export * from './login/login.component';
export * from './register/register.component';
export * from './forgot-password/forgot-password.component';
export * from './dashboards/dashboards.component';
