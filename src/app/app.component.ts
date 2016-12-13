import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { replace } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import {AppState} from './states/main';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    !sessionStorage.getItem('jwt') ? this.store$.dispatch(replace('login')) : this.store$.dispatch(replace('dashboard'));
  }

  constructor (
    public store$: Store<AppState>
  ) {
  }

}

