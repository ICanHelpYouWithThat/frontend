import { Component, OnInit} from '@angular/core';
import { ProfileService, Profile } from '../../services/profile/profile.service';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import {AppState} from '../../states/main';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private profile: Profile;
  public onLoginHeader: boolean;

  constructor (
    private _profileService: ProfileService,
    private _store: Store<AppState>
  ) {
    this.profile = this._profileService.profile;
  }

  logout(): void {
    this._profileService.logout();
    this._store.dispatch(go(['/login', {onLoginHeader: 4}]));
  }

  ngOnInit(): void {
    this.onLoginHeader = true;
  }
}
