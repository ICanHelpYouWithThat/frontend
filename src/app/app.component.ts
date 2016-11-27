import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  private profile;

  constructor (private _router: Router) {
    // Check if user has token, if not redirect to login page
    !sessionStorage.getItem('jwt') ? this._router.navigate(['login']) : this._router.navigate(['dashboard']);
  }

}
