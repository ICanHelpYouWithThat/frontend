import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard/auth-guard.service';

import { AdminComponent } from '../components/admin/admin.component';
import { AppComponent } from '../app.component';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { EventComponent } from '../components/event/event.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { InviteComponent } from '../components/invite/invite.component';
import { LoginComponent } from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SignupComponent } from '../components/signup/signup.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'event', component: EventComponent},
  {path: 'invite', component: InviteComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule {}

export const routableComponents = [
  AdminComponent,
  AppComponent,
  ConfirmComponent,
  DashboardComponent,
  EventComponent,
  InviteComponent,
  LoginComponent,
  ProfileComponent,
  SignupComponent
];

