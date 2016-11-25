import {Component, ViewEncapsulation} from '@angular/core';
import {ProfileService} from './services/profile.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  providers: [ProfileService]
})

export class AppComponent {

  private username: String;
  private password: String;

  constructor(private _profileService: ProfileService) {
    this.username = '';
    this.password = '';
  }

  login () {
    this._profileService
      .login({userid: this.username, password: this.password})
      .subscribe(
        (response) => {
          sessionStorage.setItem('jwt', response.token)
        },
        (error) => {
          console.log(error.message)
        }
      )
  }

  ngOnInit() {
  }
}
