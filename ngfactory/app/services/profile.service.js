import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
export var ProfileService = (function () {
    function ProfileService(_http) {
        var _this = this;
        this._http = _http;
        this.createProfile = function (body) {
            return _this._http.post(_this.url, JSON.stringify(body), _this.options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return Observable.throw(error.json() || 'Server error'); });
        };
        this.getProfile = function (profileId) {
            if (sessionStorage.getItem('jwt')) {
                var url = profileId ? _this.url + profileId : _this.url;
                _this.options.headers.append('Authorization', sessionStorage.getItem('jwt'));
                return _this._http.get(url, _this.options)
                    .map(function (response) { return response.json(); })
                    .catch(function (error) { return Observable.throw(error.json() || 'Server error'); });
            }
            return Observable.throw('Unauthorized, please login');
        };
        this.updateProfile = function (body) {
            if (sessionStorage.getItem('jwt')) {
                return _this._http.put(_this.url, JSON.stringify(body), _this.options)
                    .map(function (response) { return response.json(); })
                    .catch(function (error) { return Observable.throw(error.json() || 'Server error'); });
            }
            return Observable.throw('Unauthorized, please login');
        };
        this.deleteProfile = function (profileId) {
            if (sessionStorage.getItem('jwt')) {
                var url = _this.url + profileId;
                _this.options.headers.append('Authorization', sessionStorage.getItem('jwt'));
                return _this._http.delete(url, _this.options)
                    .map(function (response) { return response.json(); })
                    .catch(function (error) { return Observable.throw(error.json() || 'Server error'); });
            }
            return Observable.throw('Unauthorized, please login');
        };
        this.login = function (credentials) {
            var url = _this.url + 'login';
            return _this._http.post(url, JSON.stringify(credentials), _this.options)
                .map(function (response) { return response.json(); })
                .catch(function (error) { return Observable.throw(error.json() || 'Server error'); });
        };
        this.url = environment.host + '/profile/';
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        this.options = new RequestOptions({
            headers: this.headers
        });
    }
    ProfileService.decorators = [
        { type: Injectable },
    ];
    ProfileService.ctorParameters = [
        { type: Http, },
    ];
    return ProfileService;
}());
//# sourceMappingURL=profile.service.js.map