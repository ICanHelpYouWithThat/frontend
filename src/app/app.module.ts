import { AppComponent } from './app.component';
import { AuthGuard } from './routing/auth-guard/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ProfileService } from './services/profile/profile.service';
import { ProfilesService } from './services/profiles/profiles.service';
import { InviteService } from './services/invite/invite.service';
import { PropertyPipe } from './pipes/property.pipe';

import { AppRoutingModule, routableComponents } from './routing/routing.module';

@NgModule({
  declarations: [
    PropertyPipe,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ProfileService,
    ProfilesService,
    InviteService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
