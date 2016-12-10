import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { PropertyPipe } from "./pipes/property.pipe";

import { AppRoutingModule, routableComponents } from './app-routing.module';

@NgModule({
  declarations: [routableComponents, PropertyPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ProfileService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
