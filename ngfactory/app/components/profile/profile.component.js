import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from "../../services/profile.service";
export var ProfileComponent = (function () {
    function ProfileComponent(_profileService, _router) {
        this._profileService = _profileService;
        this._router = _router;
        this.profile = "";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.profile = {
            "id": "12345",
            "name": "Zach Magaw",
            "karma": "5",
            "email": "bob@smith.com",
            "phone": "123-123-1234",
            "geolocation": "37.4211274197085,-122.0855988802915",
            "zipcode": "12345",
            "type": "1",
            "mission": "This is the mission of the user - individual mission or organizations mission.",
            "admin": "1",
            "likes": "52",
            "invites": "50",
            "status": "New",
            "password": "thisismypassword",
            "linked_acct": "test"
        };
    };
    ProfileComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: 'profile.component.html',
                    encapsulation: ViewEncapsulation.None,
                    styleUrls: ['profile.component.css'],
                    providers: [ProfileService]
                },] },
    ];
    ProfileComponent.ctorParameters = [
        { type: ProfileService, },
        { type: Router, },
    ];
    return ProfileComponent;
}());
//# sourceMappingURL=profile.component.js.map