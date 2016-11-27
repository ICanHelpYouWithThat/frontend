import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

interface Profile {
  name: string,
  email: string,
  mission: string
}

@Component({
  templateUrl: 'signup.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['signup.component.css'],
  providers: [ProfileService]
})

export class SignupComponent implements OnInit {

  private profile: Profile;

  constructor(private _profileService: ProfileService, private _router: Router) {
    this.profile = {
      name: '',
      email: '',
      mission: ''
    }
  }

  signup () {
    this._profileService
      .createProfile(this.profile)
      .subscribe(
        (response) => {
          this._router.navigate(['thankyou']);
        },
        (error) => {
          console.log(error.message)
        }
      )
  }

  ngOnInit() {
  }
}
