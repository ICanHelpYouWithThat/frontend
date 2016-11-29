import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
export var InviteService = (function () {
    function InviteService(_http) {
        var _this = this;
        this._http = _http;
        this.invite = function (invitation) {
            if (sessionStorage.getItem('jwt')) {
                _this.options.headers.append('Authorization', sessionStorage.getItem('jwt'));
                return _this._http.post(_this.url, JSON.stringify(invitation), _this.options)
                    .map(function (response) { return response.json(); })
                    .catch(function (error) { return Observable.throw(error.json() || 'Server error'); });
            }
            return Observable.throw('Unauthorized, please login');
        };
        this.url = environment.host + '/invite/';
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        this.options = new RequestOptions({
            headers: this.headers
        });
    }
    InviteService.decorators = [
        { type: Injectable },
    ];
    InviteService.ctorParameters = [
        { type: Http, },
    ];
    return InviteService;
}());
//# sourceMappingURL=invite.service.js.map