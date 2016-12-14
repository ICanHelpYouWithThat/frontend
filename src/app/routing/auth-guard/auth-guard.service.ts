import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../states/main';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _profileService: ProfileService,
    private _store: Store<AppStateInterface>,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this._profileService.isLoggedIn()) {
      return true;
    }

    this._profileService.redirectUrl = state.url;

    return false;
  }
}
