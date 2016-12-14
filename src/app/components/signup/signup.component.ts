import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/main';
import { Router } from '@angular/router';
import { ProfileService, Profile} from '../../services/profile/profile.service';
import {go} from '@ngrx/router-store';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  providers: [ProfileService]
})

export class SignupComponent implements OnInit {

  private profile: Profile;

  constructor(
    private _profileService: ProfileService,
    private _store: Store<AppState>,
    private _router: Router
  ) {
    this.profile = this._profileService.profile;
  }

  signup () {
    this._profileService
      .createProfile(this.profile)
      .subscribe(
        (response) => {
          this._store.dispatch(go('thankyou'));
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
  ngOnInit() {
  }

}
