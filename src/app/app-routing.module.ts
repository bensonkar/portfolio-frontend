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
import { AppGuardService } from './services/app-guard.service';
import { EmailsComponent } from './layouts/emails/emails/emails.component';
import { FamilyComponent } from './layouts/family/family/family.component';
import { CreateFamilyComponent } from './layouts/family/create-family/create-family.component';
import { RelationshipsComponent } from './layouts/relation/relationships/relationships.component';
import { EditFamilyComponent } from './layouts/family/edit-family/edit-family.component';
import { CreateRelationComponent } from './layouts/relation/create-relation/create-relation.component';
import { EditRelationComponent } from './layouts/relation/edit-relation/edit-relation.component';
import { SendToOneComponent } from './layouts/emails/send-to-one/send-to-one.component';
import { SendToAllComponent } from './layouts/emails/send-to-all/send-to-all.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
    },
    {
        path: 'dashboard',
        canActivate: [AppGuardService],
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
        canActivate: [AppGuardService],
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
        canActivate: [AppGuardService],
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
        canActivate: [AppGuardService],
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
        canActivate: [AppGuardService],
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
        canActivate: [AppGuardService],
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
        path: 'emails',
        canActivate: [AppGuardService],
        component: EmailsComponent,
        data: {
            title: 'Emails',
            breadcrumbs: [
                {
                    text: 'Dashboard/emails',
                    link: '/dashboard',
                    active: false
                }
            ]
        } as SBRouteData,
    },
    {
        path: 'send-to-one',
        canActivate: [AppGuardService],
        component: SendToOneComponent,
        data: {
            title: 'Send email',
        } as SBRouteData,
    },
    {
        path: 'send-to-all',
        canActivate: [AppGuardService],
        component: SendToAllComponent,
        data: {
            title: 'Send email',
        } as SBRouteData,
    },
    {
        path: 'family',
        canActivate: [AppGuardService],
        component: FamilyComponent,
        data: {
            title: 'Family members',
            breadcrumbs: [
                {
                    text: 'Dashboard/family',
                    link: '/dashboard',
                    active: false
                }
            ]
        } as SBRouteData,
    },
    {
        path: 'create-family',
        canActivate: [AppGuardService],
        component: CreateFamilyComponent,
        data: {
            title: 'Family members',
        } as SBRouteData,
    },
    {
        path: 'edit-family',
        canActivate: [AppGuardService],
        component: EditFamilyComponent,
        data: {
            title: 'Edit member',
        } as SBRouteData,
    },
    {
        path: 'create-relation',
        canActivate: [AppGuardService],
        component: CreateRelationComponent,
        data: {
            title: 'Create relation',
        } as SBRouteData,
    },
    {
        path: 'edit-relation',
        canActivate: [AppGuardService],
        component: EditRelationComponent,
        data: {
            title: 'Edit relation',
        } as SBRouteData,
    },
    {
        path: 'relation',
        canActivate: [AppGuardService],
        component: RelationshipsComponent,
        data: {
            title: 'Relationship',
            breadcrumbs: [
                {
                    text: 'Dashboard/relation',
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
