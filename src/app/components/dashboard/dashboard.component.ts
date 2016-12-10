import { Component, ViewEncapsulation} from '@angular/core';
import { Profile } from '../profile/Profile';
import { ProfileService } from "../../services/profile.service";

@Component({
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard.component.css'],
  providers: [ProfileService]
})

export class DashboardComponent {

  private profile: Profile;

  constructor (private _profileService: ProfileService) {
    this.profile = this._profileService.profile;
  }

}
