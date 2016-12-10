import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService, Profile} from '../../services/profile/profile.service';

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
    private _router: Router
  ) {
    this.profile = this._profileService.profile;
  }

  signup () {
    this._profileService
      .createProfile(this.profile)
      .subscribe(
        (response) => {
          this._router.navigate(['thankyou']);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }
  ngOnInit() {
  }

}
