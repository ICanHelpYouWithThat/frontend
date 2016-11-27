import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InviteService } from '../../services/invite.service';

@Component({
  templateUrl: './invite.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./invite.component.css'],
  providers: [InviteService]
})

export class InviteComponent implements OnInit {

  private invitation;
  private email: string;

  constructor (private _inviteService: InviteService, private _router: Router) {

    this.email = "";

    this.invitation = { emails : [
    ],
    message: `Hey, 
      You're getting this...
      blah blah blah
      Orange Menace blah `}
  }
  eventHandler(event) {
    if(event.keyCode == 13){
      this.addEmail();
    }

  }

  addEmail() {
    var anArray = this.email.split(",");
    for(var i=0; i<anArray.length; i++)
    {
      this.invitation.emails.push(anArray[i]);
    }
    this.email = "";

  }
  ngOnInit () {

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
