import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/main';
import { go } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';

export interface Profile {
  _id?: string;
  created?: string;
  modified?: string;
  mission?: string;
  name?: string;
  email?: string;
  linkedAccounts?: [string];
  likes?: number;
  invites?: number;
  admin?: false;
  type?: string;
}

export interface ProfileCredentials {
  userid?: string;
  password?: string;
  email?: string;
  name?: string;
  mission?: string;
}

@Injectable()
export class ProfileService {

  public profile: Profile;
  public redirectUrl: string;

  private headers: Headers;
  private options: RequestOptions;
  private url: string;

  constructor (
    private _http: Http,
    private _store: Store<AppState>
  ) {
    this.redirectUrl = '';
    this.url = environment.host + '/profile/';
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    this.options = new RequestOptions({
      headers: this.headers
    });

    if (localStorage.getItem('jwt') && localStorage.getItem('profile')) {
      this.profile = JSON.parse(localStorage.getItem('profile'));
    }
  }

  public createProfile = (body: Object) => {
    return this._http.post(this.url, JSON.stringify(body), this.options)
      .map((response: Response) => response.json())
      .catch((error) => Observable.throw(error.json() || 'Server error'));
  };

  public getProfile = (profileId?: string) => {
    if (this.isLoggedIn()) {
      let url = profileId ? this.url + profileId : this.url;
      let options = this.options;
      options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

      return this._http.get(url, options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'));
    }

    return Observable.throw('Unauthorized, please login');
  };

  public updateProfile = (body: Profile) => {
    if (this.isLoggedIn()) {
      let options = this.options;
      options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

      return this._http.put(this.url + this.profile._id, JSON.stringify(body), options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'));
    }

    return Observable.throw('Unauthorized, please login');
  };

  public deleteProfile = (profileId: string) => {

    if (this.isLoggedIn()) {
      let url = this.url + profileId;
      let options = this.options;
      options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwt'));

      return this._http.delete(url, options)
        .map((response: Response) => response.json())
        .catch((error) => Observable.throw(error.json() || 'Server error'));
    }

    return Observable.throw('Unauthorized, please login');
  };

  public login = (credentials: ProfileCredentials) => {
    let url = this.url + 'login';

    return this._http.post(url, JSON.stringify(credentials), this.options)
      .map((response: Response) => response.json())
      .catch((error) => Observable.throw(error.json() || 'Server error'))
      .subscribe(
        (response) => {
          localStorage.setItem('profile', JSON.stringify(response.profile));
          this.profile = response.profile;
          localStorage.setItem('jwt', response.token);
          this._store.dispatch(go(['dashboard']));

          this.redirectUrl = '';
        },
        (error) => {
          console.log(error.message);
        }
      );
  };

  public logout = () => {
    localStorage.clear();
  };

  public isLoggedIn = () => localStorage.getItem('jwt');

  public confirmInvite = (credentials: ProfileCredentials) => {
    let url = this.url + 'login';

    return this._http.post(url, JSON.stringify(credentials), this.options)
      .map((response: Response) => response.json())
      .catch((error) => Observable.throw(error.json() || 'Server error'));
  };

}
