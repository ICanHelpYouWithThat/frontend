import {Component, OnInit} from '@angular/core';
import { ProfileService, ProfileCredentials } from '../../services/profile/profile.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [ProfileService]
})

export class LoginComponent implements OnInit {
  private credentials: ProfileCredentials;
  public isSubmitVisible: boolean = false;
  public loginText: string = '';

  constructor(
    private _profileService: ProfileService
  ) {
    this.credentials = {
      userid: '',
      password: ''
    };
  }

  emailListener (event: any) {

      this.loginText = 'Welcome ' + event.target.value;

      event.preventDefault();
      this.isSubmitVisible = true;
  }

  login () {
    this._profileService
      .login(this.credentials);
  }

  ngOnInit(): void {}
}
