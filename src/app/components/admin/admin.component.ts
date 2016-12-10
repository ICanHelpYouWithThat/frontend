import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from "../../services/profile.service";
import { ProfilesService } from "../../services/profiles.service";


@Component({
  templateUrl: 'admin.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['admin.component.css'],
  providers: [ProfileService, ProfilesService]
})


export class AdminComponent implements OnInit {

  private profile: any;
  private profiles: any;

  constructor (private _profileService: ProfileService, private profilesServices: ProfilesService, private _router: Router) {
    this.profiles = "";

  }

  ngOnInit () {
   /* this._profileService.getProfile()
      .subscribe(
        (response) => {
          this.profile = response.profile
        },
        (error) => {
          this._router.navigate(['login']);
        }
      )
  */
    this.profiles =
      [
        {
        "id": "12345",
        "name": "Zach Magaw",
        "karma": "5",
        "email": "bob@smith.com",
        "phone": "123-123-1234",
        "geolocation": "37.4211274197085,-122.0855988802915",
        "zipcode": "12345",
        "type": "1",
        "mission": "This is the mission of the user - individual mission or organizations mission.",
        "admin": "1",
        "likes": "52",
        "invites": "50",
        "status": "New",
        "password": "thisismypassword",
        "linked_acct": "test"
      },
    {
        "id": "12346",
        "name": "Bob Smith",
        "karma": "5",
        "email": "bob@smith.com",
        "phone": "123-123-1234",
        "geolocation": "37.4211274197085,-122.0855988802915",
        "zipcode": "12345",
        "type": "1",
        "mission": "This is the mission of the user - individual mission or organizations mission.",
        "admin": "1",
        "likes": "52",
        "invites": "50",
        "status": "New",
        "password": "thisismypassword",
        "linked_acct": "test"

      },
        {
          "id": "12348",
          "name": "Billy Smith",
          "karma": "5",
          "email": "bob@smith.com",
          "phone": "123-123-1234",
          "geolocation": "37.4211274197085,-122.0855988802915",
          "zipcode": "12345",
          "type": "1",
          "mission": "This is the mission of the user - individual mission or organizations mission.",
          "admin": "1",
          "likes": "52",
          "invites": "50",
          "status": "Requested",
          "password": "thisismypassword",
          "linked_acct": "test"

        },
        {
          "id": "12347",
          "name": "Billy Smith",
          "karma": "5",
          "email": "bob@smith.com",
          "phone": "123-123-1234",
          "geolocation": "37.4211274197085,-122.0855988802915",
          "zipcode": "12345",
          "type": "1",
          "mission": "This is the mission of the user - individual mission or organizations mission.",
          "admin": "1",
          "likes": "52",
          "invites": "50",
          "status": "Invited",
          "password": "thisismypassword",
          "linked_acct": "test"

        }
      ]


  }
}
