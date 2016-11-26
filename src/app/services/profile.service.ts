import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class ProfileService {

  private url: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor (private _http: Http) {
    this.url = 'http://localhost:3000/profile/';
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    this.options = new RequestOptions({
      headers: this.headers
    })
  }

  public createProfile = (body) => {
    return this._http.post(this.url, JSON.stringify(body), this.options)
      .map((response: Response) => response.json())
      .catch((error) => Observable.throw(error.json() || 'Server error'))
  };

  public getProfile = (profileId?) => {

    if (sessionStorage.getItem('jwt')) {
      let url = profileId ? this.url + profileId : this.url;

      this.options.headers.append('Authorization', sessionStorage.getItem('jwt'));

      return this._http.get(url, this.options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    return Observable.throw('Unauthorized, please login')
  };

  public updateProfile = (body) => {
    if (sessionStorage.getItem('jwt')) {
      return this._http.put(this.url, JSON.stringify(body), this.options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    return Observable.throw('Unauthorized, please login')
  };

  public deleteProfile = (profileId) => {

    if (sessionStorage.getItem('jwt')) {
      let url = this.url + profileId;

      this.options.headers.append('Authorization', sessionStorage.getItem('jwt'));

      return this._http.delete(url, this.options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    return Observable.throw('Unauthorized, please login')
  };

  public login = (credentials) => {
    let url = this.url + 'login';

    return this._http.post(url, JSON.stringify(credentials), this.options)
      .map((response: Response) => response.json())
      .catch((error) => Observable.throw(error.json() || 'Server error'))
  };

}
