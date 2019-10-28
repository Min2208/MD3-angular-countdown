import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  count: number;
  resetCount: number;
  interval = 0;

  constructor() {
    this.count = 20;
    this.resetCount = 20;
  }

  ngOnInit() {
  }

  changeCount() {
    this.start();

  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.count = this.resetCount;
  }

  start() {
    this.interval = window.setInterval(() => {
      this.count--;
      if (this.count === 0) {
        this.stop();
      }
    }, 1000);
  }
}
