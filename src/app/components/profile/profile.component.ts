import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../../services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: []
})
export class ProfileComponent implements OnInit {

  private profile: Profile;


  constructor(
    private _profileService: ProfileService
  ) {
    this.profile = this._profileService.profile;
  }

  update() {
    this._profileService.updateProfile(this.profile)
      .subscribe(
        () => console.log('saved'),
        (error) => console.log('Error: ' + error)
      );
  }
  ngOnInit() {
  }

}
