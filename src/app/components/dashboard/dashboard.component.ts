import { Component } from '@angular/core';
import { ProfileService, Profile } from '../../services/profile/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {
  private profile: Profile;

  constructor (private _profileService: ProfileService) {
    this.profile = this._profileService.profile;
  }
}
