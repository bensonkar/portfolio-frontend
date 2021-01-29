import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models/navigation.model';
import { TestComponent } from './layouts/test/test.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { UsersComponent } from './layouts/system-users/users/users.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppReportsComponent } from './layouts/reports/app-reports/app-reports.component';
import { RolesComponent } from './layouts/roles/roles.component';
import { WorkgroupsComponent } from './layouts/workgroup/workgroups/workgroups.component';
import { CreateUserComponent } from './layouts/system-users/create-user/create-user.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
    },
    {
        path: 'dashboard',
        canActivate: [],
        component: DashboardComponent,
        data: {
            title: 'Dashboards',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                    active: false
                }
            ]
        } as SBRouteData,
    },
    {
        path: 'login',
        canActivate: [],
        component: LoginComponent,
        data: {
            title: 'Login'
        } as SBRouteData,
    },
    {
        path: 'verify-otp',
        canActivate: [],
        component: VerifyOtpComponent,
        data: {
            title: 'Verify otp'
        } as SBRouteData,
    },
    {
        path: 'change-password',
        canActivate: [],
        component: ChangePasswordComponent,
        data: {
            title: 'Change password'
        } as SBRouteData,
    },
    {
        path: 'forgot-password',
        canActivate: [],
        component: ForgotPasswordComponent,
        data: {
            title: 'Forgot password'
        } as SBRouteData,
    },
    {
        path: 'roles',
        canActivate: [],
        component: RolesComponent,
        data: {
            title: 'Roles',
            breadcrumbs: [
                {
                    text: 'Dashboard/roles',
                    link: '/dashboard',
                    active: false
                }
            ]
        } as SBRouteData,
    },
    {
        path: 'workgroups',
        canActivate: [],
        component: WorkgroupsComponent,
        data: {
            title: 'Workgroups',
            breadcrumbs: [
                {
                    text: 'Dashboard/workgroups',
                    link: '/dashboard',
                    active: false
                }
            ]
        } as SBRouteData,
    },
    {
        path: 'system-users',
        canActivate: [],
        component: UsersComponent,
        data: {
            title: 'System users',
            breadcrumbs: [
                {
                    text: 'Dashboard/system-users',
                    link: '/dashboard',
                    active: false
                }
            ]
        } as SBRouteData,
    },
    {
        path: 'create-user',
        canActivate: [],
        component: CreateUserComponent,
        data: {
            title: 'Create user',
            breadcrumbs: [
                {
                    text: 'Dashboard/system-users',
                    link: '/system-users',
                    active: false
                }
            ]
        } as SBRouteData,
    },
    {
        path: 'app-reports',
        canActivate: [],
        component: AppReportsComponent,
        data: {
            title: 'App Reports',
            breadcrumbs: [
                {
                    text: 'Dashboard/app-reports',
                    link: '/dashboard',
                    active: false
                }
            ]
        } as SBRouteData,
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
