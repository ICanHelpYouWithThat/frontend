"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var profile_service_1 = require('../../services/profile.service');
var SignupComponent = (function () {
    function SignupComponent(_profileService, _router) {
        this._profileService = _profileService;
        this._router = _router;
        this.profile = {
            name: '',
            email: '',
            mission: ''
        };
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this._profileService
            .createProfile(this.profile)
            .subscribe(function (response) {
            _this._router.navigate(['thankyou']);
        }, function (error) {
            console.log(error.message);
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        core_1.Component({
            templateUrl: 'signup.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['signup.component.css'],
            providers: [profile_service_1.ProfileService]
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
