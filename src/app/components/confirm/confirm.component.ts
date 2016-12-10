import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

interface Profile {
  name: string,
  email: string,
  mission: string
}

@Component({
  templateUrl: 'confirm.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['confirm.component.css'],
  providers: [ProfileService]
})

export class ConfirmComponent implements OnInit {

  private profile: Object;

  constructor(private _profileService: ProfileService, private _router: Router) {
    this.profile = {
      name: '',
      email: '',
      mission: ''
    }
  }

  confirm () {
    this._profileService
      .confirmInvite(this.profile)
      .subscribe(
        (response) => {
          this._router.navigate(['thankyou']);
        },
        (error) => {
          console.log(error.message)
        }
      )
  }

  ngOnInit() {
  }
}
