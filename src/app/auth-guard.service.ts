import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _profileService: ProfileService, private _router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._profileService.isLoggedIn) {return true}

    this._profileService.redirectUrl = state.url;
    this._router.navigate(['/login']);
    return false;
  }

}
