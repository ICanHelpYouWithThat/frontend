import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService, ProfileCredentials } from '../../services/profile/profile.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  private profile: ProfileCredentials;

  constructor(private _profileService: ProfileService, private _router: Router) {
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
