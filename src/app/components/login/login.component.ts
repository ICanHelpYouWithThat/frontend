import {Component, OnInit, trigger, state, style, transition, animate, ChangeDetectionStrategy} from '@angular/core';
import { ProfileService, ProfileCredentials } from '../../services/profile/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../../states/main';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('headerState', [
      state('1', style({
        'padding-top': '1em',
      })),
      state('2', style({
        'padding-top': '1em',
        'width': '50%'
      })),
      state('3', style({
        'padding-top': '.75em',
      })),
      transition('* => void', animate('1s')),
      transition('void => *', animate('1s'))
    ]),
    trigger('headerPrimaryState', [
      state('0', style({
        'opacity': '.8'
      })),
      state('1', style({
        'font-size': '1.75em',
        'opacity': '.8'
      })),
      state('2', style({
        'font-size': '1.75em',
        'opacity': '.8'
      })),
      state('3', style({
        'width': '7.5em',
        'height': '7.5em',
        'opacity': '.8'
      })),
      transition('* => void', animate('1s')),
      transition('void => *', animate('1s')),
      transition('void => *', [
        style({
          'opacity': '0'
        }),
        animate('.75s')
      ]),
    ]),
    trigger('headerSubState', [
      state('0', style({
        'opacity': '.4'
      })),
      state('1', style({
        'opacity': '.4',
        'font-size': '.75em',
        'padding-top': '.2:209em'
      })),
      state('2', style({
        'opacity': '.4',
        'font-size': '.75em',
        'padding-top': '.2em'
      })),
      state('3', style({
        'opacity': '.4',
        'font-size': '.75em',
        'padding-top': '.25em'
      })),
      state('4', style({
        'opacity': '.4',
        'font-size': '1.5em',
        'padding-top': '.2em',
      })),
      transition('void => *', animate('1s')),
      transition('3 => 4', [
        style({
          'font-size': '.75em',
          'padding-top': '.2em'
        }),
        animate('1s')
      ]),
      transition('void => 0', [
        style({
          'opacity': '0'
        }),
        animate('.5s')
      ]),
    ]),
    trigger('logoState', [
      state('0', style({
        'opacity': '.2'
      })),
      state('1', style({
        'width': '7.5em',
        'height': '7.5em',
      })),
      state('2', style({
        'width': '7.5em',
        'height': '7.5em',
      })),
      state('3', style({
        'width': '7.5em',
        'height': '7.5em',
      })),
      state('4', style({
        'width': '15em',
        'height': '15em',
      })),
      transition('* => void', animate('1s')),
      transition('4 => 2', [
        style({
          'opacity': '0'
        }),
        animate('1s')
      ]),
      transition('* => 4', [
        style({
          'width': '7.5em',
          'height': '7.5em'
        }),
        animate('1s')
      ])
    ]),
    trigger('fieldState', [
      state('hidden', style({
        'opacity': '0'
      })),
      state('visible', style({
        'opacity': '1'
      })),
      transition('* => void', [
        style({
          opacity: 1,
        }),
        animate('1s 10 ease-out', style({
          opacity: 0,
        }))
      ]),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate('1s 10 ease-in', style({
          opacity: 1,
        }))
      ])
    ])
  ]
})

export class LoginComponent implements OnInit {
  router: Observable<AppState>;
  private credentials: ProfileCredentials;
  public isSubmitVisible: boolean = false;
  public loginText: string = '';
  public onLoginHeader: number = 0;
  public fieldVisibility: string = 'visible';
  public loginSuccess: boolean = false;
  public screenSize: number = window.innerWidth;

  constructor(
    private _profileService: ProfileService,
    private _route: ActivatedRoute,
    public store$: Store<AppState>
  ) {
    this.fieldVisibility = 'visible';
    this.credentials = {
      userid: '',
      password: ''
    };



  }

  login (event: any): void {
    if (event.key === 'Enter') {
      this.loginSuccess = true;
      this.fieldVisibility = 'hidden';
      this.sizeHeader();
      setTimeout(() => {
        this._profileService
          .login(this.credentials);
      }, 1000);
    }
  }

  sizeHeader (): void {
    if (this.loginSuccess) {
      if (this.screenSize >= 1500) {
        this.onLoginHeader = 1;
      } else if (this.screenSize < 1500 && this.screenSize > 768) {
        this.onLoginHeader = 2;
      } else if (this.screenSize < 768) {
        this.onLoginHeader = 3;
      }
    } else {
      this.onLoginHeader = 0;
    }

  }

  ngOnInit(): void {

    console.log(this.store$);
    this.store$.select('router').subscribe(((val: AppState) => {
      console.log(val);
      console.log(val);
      let animationTrigger = 1;
      if (val.router.history.length > 1) {
        console.log('ANIM TRIGGER');
        this.onLoginHeader = animationTrigger;
        console.log(this.onLoginHeader);
      }
    }).bind(this));

    this.onLoginHeader = +(!!this._route.snapshot.params['onLoginHeader'] ? this._route.snapshot.params['onLoginHeader'] : 0);
    this.sizeHeader();
    console.log(this.onLoginHeader);
  }
}
