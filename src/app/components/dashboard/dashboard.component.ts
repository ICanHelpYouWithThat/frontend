import {Component, OnInit} from '@angular/core';
import { ProfileService, Profile } from '../../services/profile/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private profile: Profile;
  public loginSuccess: boolean;

  constructor (private _profileService: ProfileService) {
    this.profile = this._profileService.profile;
  }

  ngOnInit(): void {
    this.loginSuccess = true;
  }
}
