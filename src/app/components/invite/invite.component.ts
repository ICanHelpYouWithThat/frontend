import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  templateUrl: './invite.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./invite.component.css'],
  providers: [ProfileService]
})

export class InviteComponent implements OnInit {

  constructor (private _profileService: ProfileService) {

  }

  ngOnInit () {

  }

}
