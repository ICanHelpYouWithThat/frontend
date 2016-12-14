/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule } from '@angular/router/testing';
import {AppModule} from "./app.module";
import { Store } from '@ngrx/store';
import {AppState} from "./states/main";
import {Renderer} from "../../node_modules/@angular/core/src/render/api";
import {StoreModule} from "../../node_modules/@ngrx/store/src/ng2";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        AppModule,
        StoreModule.provideStore(MainSto),
        Renderer,
        {provide: Router,  useClass: MockRouter }
      ],

      imports: [
        RouterTestingModule
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
