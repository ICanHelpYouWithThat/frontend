import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from "../../services/profile.service";

@Component({
  templateUrl: 'profile.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['profile.component.css'],
  providers: [ProfileService]
})

export class ProfileComponent implements OnInit {

  private profile;


  constructor(private _profileService: ProfileService, private _router: Router) {
    this.profile = "";
  }

  ngOnInit() {
    /*
     //will add in profile service call when getting the complete service backend stood up
     //
     this._profileService.getProfile()
     .subscribe(
     (response) => {
     this.profile = response.profile
     },
     (error) => {
     this._router.navigate(['login']);
     }
     )
     */
    // Eliminate the hardcoded Profile
    this.profile = {
      "name": "Zach Magaw",
      "invites": 10
    }
  }
}
