import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService, ProfileCredentials } from '../../services/profile/profile.service';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import {AppStateInterface} from '../../states/main';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  private profile: ProfileCredentials;

  constructor(
    private _profileService: ProfileService,
    private _router: Router,
    private _store: Store<AppStateInterface>
  ) {
    this.profile = {
      name: '',
      email: '',
      mission: ''
    };
  }

  confirm () {
    this._profileService
      .confirmInvite(this.profile)
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
