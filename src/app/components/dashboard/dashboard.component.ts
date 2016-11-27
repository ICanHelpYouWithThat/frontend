import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from "../../services/profile.service";

@Component({
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard.component.css'],
  providers: [ProfileService]
})

export class DashboardComponent implements OnInit {

  private profile;

  constructor (private _profileService: ProfileService, private _router: Router) {

  }

  ngOnInit () {
    this._profileService.getProfile()
      .subscribe(
        (response) => {
          this.profile = response.profile
        },
        (error) => {
          this._router.navigate(['login']);
        }
      )
  }
}
