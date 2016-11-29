import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
export var SignupComponent = (function () {
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
    SignupComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: 'signup.component.html',
                    encapsulation: ViewEncapsulation.None,
                    styleUrls: ['signup.component.css'],
                    providers: [ProfileService]
                },] },
    ];
    SignupComponent.ctorParameters = [
        { type: ProfileService, },
        { type: Router, },
    ];
    return SignupComponent;
}());
//# sourceMappingURL=signup.component.js.map