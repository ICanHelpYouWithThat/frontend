import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
export var LoginComponent = (function () {
    function LoginComponent(_profileService, _router) {
        this._profileService = _profileService;
        this._router = _router;
        this.credentials = {
            userid: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._profileService
            .login(this.credentials)
            .subscribe(function (response) {
            sessionStorage.setItem('jwt', response.token);
            _this._router.navigate(['']);
        }, function (error) {
            console.log(error.message);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './login.component.html',
                    encapsulation: ViewEncapsulation.None,
                    styleUrls: ['./login.component.css'],
                    providers: [ProfileService]
                },] },
    ];
    LoginComponent.ctorParameters = [
        { type: ProfileService, },
        { type: Router, },
    ];
    return LoginComponent;
}());
//# sourceMappingURL=login.component.js.map