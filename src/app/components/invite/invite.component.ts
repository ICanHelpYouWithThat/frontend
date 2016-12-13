import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InviteService } from '../../services/invite/invite.service';
import { Store } from '@ngrx/store';
import { ProfileService, Profile } from '../../services/profile/profile.service';
import {AppState} from '../../states/main';
import {go} from "@ngrx/router-store";

@Component({
  selector: 'app-invite',
  templateUrl: 'invite.component.html',
  styleUrls: ['invite.component.css']
})

export class InviteComponent {

  private invitation: any;
  private email: string;
  private profile: Profile;

  private re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor (
    private _profileService: ProfileService,
    private _inviteService: InviteService,
    private _store: Store<AppState>,
    private _router: Router
  ) {

    this.email = '';

    this.invitation = {
      emails : [],
      message: `Hey, 
        You're getting this...
        blah blah blah
        Orange Menace blah `
    };

    this.profile = this._profileService.profile;
  }
  eventHandler(event: any) {
    if (event.keyCode === 13) {
      this.addEmail();
    }
  }

  addEmail() {
    console.log('Number of invites: ' + this.profile.invites);
    this.email = this.email.trim();
    if (this.email.length > 0) {
      const emails = this.email.split(',');

      // Check the number of invites this user has to ensure they have invites left.
      if (emails.length <= this.profile.invites) {
        for (let i = 0; i < emails.length; i++) {
          if (this.re.test(emails[i])) {
            this.profile.invites--;
            this.invitation.emails.push(emails[i]);
          }
        }
        this.email = '';
      }
    }
  }


  invite () {
    this._inviteService
      .invite(this.invitation)
      .subscribe(
        (response) => {
          sessionStorage.setItem('jwt', response.token);
          this._store.dispatch(go(''));
          this._router.navigate(['']);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }

}
