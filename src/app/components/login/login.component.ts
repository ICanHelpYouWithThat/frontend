import {Component, OnInit, trigger, state, style, transition, animate, keyframes} from '@angular/core';
import { ProfileService, ProfileCredentials } from '../../services/profile/profile.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [ProfileService],
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
        'font-size': '4.125em'
      })),
      state('1', style({
        'font-size': '1.75em'
      })),
      state('2', style({
        'font-size': '1.75em'
      })),
      state('3', style({
        'width': '7.5em',
        'height': '7.5em'
      })),
      transition('* => void', animate('1s')),
      transition('void => *', animate('1s'))
    ]),
    trigger('headerSubState', [
      state('0', style({
        'font-size': '1.5em',
        'padding-top': '.2em'
      })),
      state('1', style({
        'font-size': '.75em',
        'padding-top': '.2em'
      })),
      state('2', style({
        'font-size': '.75em',
        'padding-top': '.2em'
      })),
      state('3', style({
        'font-size': '.75em',
        'padding-top': '.25em'
      })),
      transition('* => void', animate('1s')),
      transition('void => *', animate('1s'))
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
        animate('1s 10 ease-in', style({
          opacity: 0,
        }))
      ]),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate('1s 10 ease-out', style({
          opacity: 1,
        }))
      ])
    ])
  ]
})

export class LoginComponent implements OnInit {
  private credentials: ProfileCredentials;
  public isSubmitVisible: boolean = false;
  public loginText: string = '';
  public onLoginHeader: number = 0;
  public fieldVisibility: string = 'visible';
  public loginSuccess: boolean = false;
  public screenSize: number = window.innerWidth;

  constructor(
    private _profileService: ProfileService
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
  }
}
