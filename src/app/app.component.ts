import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = `May I help you?... Can i help you?  Why don't I help you with that?!`;
  cardStateFallen = false;
  counter = 10;
  yuem_inc = .1;
  yuem = this.yuem_inc;
  hoverClass = 'help_you';
  animating = false;

  onCardHover(event:any) {
    if (!this.animating && !this.cardStateFallen) {
      this.animating = true;
      this.cardStateFallen = true;
      let timer = Observable.timer(1000,1000);
      timer.subscribe(t => (this.animating = false));
      this.hoverClass = 'help_you runaway';
    }
  }

  onClick(event:any) {
    if (!this.animating && this.cardStateFallen) {
      this.animating = true;
      this.cardStateFallen = false;
      let timer = Observable.timer(1000,1000);
      timer.subscribe(t => (this.animating = false));
      this.hoverClass = 'help_you runback';
    }
  }

  ngOnInit() {
    let timer = Observable.timer(1000,1000)
      .timeInterval()
      .pluck('interval')
      .take(10);

    timer.subscribe(t=> {
      this.counter--;
      this.yuem += this.yuem_inc;
    });
  }
}
