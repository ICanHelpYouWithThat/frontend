import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InviteService } from '../../services/invite.service';
import { ProfileService } from '../../services/profile.service';
export var InviteComponent = (function () {
    function InviteComponent(_profileService, _inviteService, _router) {
        this._profileService = _profileService;
        this._inviteService = _inviteService;
        this._router = _router;
        this.re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.email = "";
        this.invitation = {
            emails: [],
            message: "Hey, \n        You're getting this...\n        blah blah blah\n        Orange Menace blah "
        };
        this.profile = "";
    }
    InviteComponent.prototype.eventHandler = function (event) {
        if (event.keyCode == 13) {
            this.addEmail();
        }
    };
    InviteComponent.prototype.addEmail = function () {
        console.log("Number of invites: " + this.profile.invites);
        this.email = this.email.trim();
        if (this.email.length > 0) {
            var anArray = this.email.split(",");
            if (anArray.length <= this.profile.invites) {
                for (var i = 0; i < anArray.length; i++) {
                    if (this.re.test(anArray[i])) {
                        this.profile.invites--;
                        this.invitation.emails.push(anArray[i]);
                    }
                }
                this.email = "";
            }
        }
    };
    InviteComponent.prototype.ngOnInit = function () {
        this.profile = {
            "name": "Zach Magaw",
            "invites": 10
        };
    };
    InviteComponent.prototype.invite = function () {
        var _this = this;
        console.log("WE MADE IT");
        this._inviteService
            .invite(this.invitation)
            .subscribe(function (response) {
            sessionStorage.setItem('jwt', response.token);
            _this._router.navigate(['']);
        }, function (error) {
            console.log(error.message);
        });
    };
    InviteComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './invite.component.html',
                    encapsulation: ViewEncapsulation.None,
                    styleUrls: ['./invite.component.css'],
                    providers: [InviteService, ProfileService]
                },] },
    ];
    InviteComponent.ctorParameters = [
        { type: ProfileService, },
        { type: InviteService, },
        { type: Router, },
    ];
    return InviteComponent;
}());
//# sourceMappingURL=invite.component.js.map