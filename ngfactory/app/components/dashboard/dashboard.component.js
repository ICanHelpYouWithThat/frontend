import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from "../../services/profile.service";
export var DashboardComponent = (function () {
    function DashboardComponent(_profileService, _router) {
        this._profileService = _profileService;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._profileService.getProfile()
            .subscribe(function (response) {
            _this.profile = response.profile;
        }, function (error) {
            _this._router.navigate(['login']);
        });
    };
    DashboardComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: './dashboard.component.html',
                    encapsulation: ViewEncapsulation.None,
                    styleUrls: ['./dashboard.component.css'],
                    providers: [ProfileService]
                },] },
    ];
    DashboardComponent.ctorParameters = [
        { type: ProfileService, },
        { type: Router, },
    ];
    return DashboardComponent;
}());
//# sourceMappingURL=dashboard.component.js.map