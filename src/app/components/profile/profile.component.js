"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var profile_service_1 = require("../../services/profile.service");
var ProfileComponent = (function () {
    function ProfileComponent(_profileService, _router) {
        this._profileService = _profileService;
        this._router = _router;
        this.profile = "";
    }
    ProfileComponent.prototype.ngOnInit = function () {
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
    ProfileComponent = __decorate([
        core_1.Component({
            templateUrl: 'profile.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['profile.component.css'],
            providers: [profile_service_1.ProfileService]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
