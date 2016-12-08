import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

interface Credentials {
  userid: string,
  password: string
}

@Component({
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css'],
  providers: [ProfileService]
})

export class LoginComponent implements OnInit {

  private credentials: Credentials;

  constructor(private _profileService: ProfileService) {
    this.credentials = {
      userid: '',
      password: ''
    }
  }

  login () {
    this._profileService
      .login(this.credentials);
  }

  ngOnInit() {

  }

}
