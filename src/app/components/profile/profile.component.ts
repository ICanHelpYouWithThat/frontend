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
      "id" : "12345",
      "name" : "Zach Magaw",
      "karma" : "5",
      "email" : "bob@smith.com",
      "phone" : "123-123-1234",
      "geolocation" : "37.4211274197085,-122.0855988802915",
      "zipcode" : "12345",
      "type" : "1",
      "mission"  : "This is the mission of the user - individual mission or organizations mission.",
      "admin" : "1",
      "likes" : "52",
      "invites" : "50",
      "status" : "New",
      "password" : "thisismypassword",
      "linked_acct" : "test"
    }
  }
}
