import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InviteComponent } from './components/invite/invite.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from '@angular/material';
var appRoutes = [
    { path: '', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'invite', component: InviteComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent }
];
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        LoginComponent,
                        DashboardComponent,
                        InviteComponent,
                        ProfileComponent,
                        SignupComponent
                    ],
                    imports: [
                        BrowserModule,
                        FormsModule,
                        HttpModule,
                        MaterialModule.forRoot(),
                        RouterModule.forRoot(appRoutes),
                    ],
                    providers: [],
                    bootstrap: [AppComponent]
                },] },
    ];
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map