import { AppComponent } from './app.component';
import { AuthGuard } from './core/services/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app.router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    DashboardModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
