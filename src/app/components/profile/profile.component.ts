import { Component, ViewEncapsulation } from '@angular/core';
import { Profile } from './Profile';
import { ProfileService } from "../../services/profile.service";

@Component({
  templateUrl: 'profile.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['profile.component.css'],
  providers: [ProfileService]
})

export class ProfileComponent {

  private profile: Profile;


  constructor(private _profileService: ProfileService) {
    this.profile = this._profileService.profile;
  }

  update() {
    this._profileService.updateProfile(this.profile)
      .subscribe(
        () => console.log('saved'),
        (error) => console.log('Error: ' + error)
      );
  }

}
