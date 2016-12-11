import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable()
export class InviteService {

  private url: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor (private _http: Http) {
    this.url = environment.host + '/invite/';
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    this.options = new RequestOptions({
      headers: this.headers
    });
  }


  public invite = (invitation?: Object) => {
    if (sessionStorage.getItem('jwt')) {

      this.options.headers.append('Authorization', sessionStorage.getItem('jwt'));

      return this._http.post(this.url, JSON.stringify(invitation), this.options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'))
    }

    return Observable.throw('Unauthorized, please login')
  };

}
