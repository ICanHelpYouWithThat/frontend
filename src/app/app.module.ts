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
import {StoreModule, Store} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { PropertyPipe } from './pipes/property/property.pipe';
import { KeyFilterPipe } from './pipes/key-filter/key-filter.pipe';

import { AppRoutingModule, routableComponents } from './routing/routing.module';
import {MainStore} from './states/main';
import {RouterStoreModule} from "@ngrx/router-store";
import { NavigationComponent } from './components/navigation/navigation.component';

console.log(MainStore);
@NgModule({
  declarations: [
    PropertyPipe,
    routableComponents,
    KeyFilterPipe,
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(MainStore),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
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
