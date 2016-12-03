import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from "rxjs";
import { environment } from '../environments/environment';
import {Credentials} from "crypto";

@Injectable()
export class ProfileService {

  private url: string
  private headers: Headers;
  private options: RequestOptions;

  constructor (private _http: Http) {
    this.url = environment.host + '/profile/';
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    this.options = new RequestOptions({
      headers: this.headers
    })
  }

  public createProfile = (body: Object) => {
    return this._http.post(this.url, JSON.stringify(body), this.options)
      .map((response: Response) => response.json())
      .catch((error) => Observable.throw(error.json() || 'Server error'))
  };

  public getProfile = (profileId?:string) => {

    if (sessionStorage.getItem('jwt')) {
      let url = profileId ? this.url + profileId : this.url;

      this.options.headers.append('Authorization', sessionStorage.getItem('jwt'));

      return this._http.get(url, this.options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    return Observable.throw('Unauthorized, please login')
  };

  public updateProfile = (body: JSON) => {
    if (sessionStorage.getItem('jwt')) {
      return this._http.put(this.url, JSON.stringify(body), this.options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    return Observable.throw('Unauthorized, please login')
  };

  public deleteProfile = (profileId:string) => {

    if (sessionStorage.getItem('jwt')) {
      let url = this.url + profileId;

      this.options.headers.append('Authorization', sessionStorage.getItem('jwt'));

      return this._http.delete(url, this.options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    return Observable.throw('Unauthorized, please login')
  };

  public login = (credentials:Credentials) => {
    let url = this.url + 'login';

    return this._http.post(url, JSON.stringify(credentials), this.options)
      .map((response: Response) => response.json())
      .catch((error) => Observable.throw(error.json() || 'Server error'))
  };

}
