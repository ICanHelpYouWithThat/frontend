import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-event',
  templateUrl: 'event.component.html',
  styleUrls: ['event.component.css'],
  providers: [ProfileService]
})

export class EventComponent implements OnInit {


  private profile: any;


  constructor(private _profileService: ProfileService, private _router: Router) {
    this.profile = '';
  }

  ngOnInit() {
    this.profile = {
      'id' : '12345',
      'name' : 'Zach Magaw',
      'karma' : '5',
      'email' : 'bob@smith.com',
      'phone' : '123-123-1234',
      'geolocation' : '37.4211274197085,-122.0855988802915',
      'zipcode' : '12345',
      'type' : '1',
      'mission'  : 'This is the mission of the user - individual mission or organizations mission.',
      'admin' : '1',
      'likes' : '52',
      'invites' : '50',
      'status' : 'New',
      'password' : 'thisismypassword',
      'linked_acct' : 'test'
    };
  }

}
