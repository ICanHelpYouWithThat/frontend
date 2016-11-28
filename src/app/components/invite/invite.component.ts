import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InviteService } from '../../services/invite.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  templateUrl: './invite.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./invite.component.css'],
  providers: [InviteService, ProfileService]
})

export class InviteComponent implements OnInit {

  private invitation;
  private email: string;
  private profile;

  constructor (private _profileService: ProfileService, private _inviteService: InviteService, private _router: Router) {

    this.email = "";

    this.invitation = {
      emails : [],
      message: `Hey, 
        You're getting this...
        blah blah blah
        Orange Menace blah `
    }

    this.profile = "";
  }
  eventHandler(event) {
    if(event.keyCode == 13){
      this.addEmail();
    }

  }

  addEmail() {
    console.log("Number of invites: " + this.profile.invites)
    var anArray = this.email.split(",");
    //Check the number of invites this user has to ensure they have invites left.
    if(anArray.length <= this.profile.invites) {
      for (var i = 0; i < anArray.length; i++) {
        this.profile.invites--;
        this.invitation.emails.push(anArray[i]);
      }
      this.email = "";
    }
  }
  ngOnInit () {
    /*
    //will add in profile service call when getting the complete service backend stood up
    //
    this._profileService.getProfile()
      .subscribe(
        (response) => {
          this.profile = response.profile
        },
        (error) => {
          this._router.navigate(['login']);
        }
      )
     */
    // Eliminate the hardcoded Profile
    this.profile = {
      "name": "Zach Magaw",
      "invites" : 10
    }
    // Eliminate the hardcoded Profile

  }

invite () {
    console.log("WE MADE IT");
    this._inviteService
      .invite(this.invitation)
      .subscribe(
        (response) => {
          sessionStorage.setItem('jwt', response.token);
          this._router.navigate(['']);
        },
        (error) => {
          console.log(error.message)
        }
      )
  }



}
