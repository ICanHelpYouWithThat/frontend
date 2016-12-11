import { Component, OnInit} from '@angular/core';
import { ProfileService, Profile } from '../../services/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private profile: Profile;
  public loginSuccess: boolean;

  constructor (
    private _profileService: ProfileService,
    private _router: Router
  ) {
    this.profile = this._profileService.profile;
  }

  logout(): void {
    this._profileService.logout();
    this._router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.loginSuccess = true;
  }
}
