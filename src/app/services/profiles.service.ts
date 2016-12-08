import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from "rxjs";
import { environment } from '../environments/environment';
import {Credentials} from "crypto";

@Injectable()
export class ProfilesService {

  private url: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor (private _http: Http) {
    this.url = environment.host + '/profiles/';
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    this.options = new RequestOptions({
      headers: this.headers
    })
  }



  public getProfiles = () => {

    if (sessionStorage.getItem('jwt')) {

      this.options.headers.append('Authorization', sessionStorage.getItem('jwt'));

      return this._http.get(this.url, this.options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    return Observable.throw('Unauthorized, please login')
  };


}
