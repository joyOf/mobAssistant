import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'mob-assistant';
  driver: string;
  navigators: string[];

  timeLeft: number;
  driverFor: number;
  private interval;
  driverIndex = 0;

  constructor() {
    this.navigators = ['Lars', 'Lulu', 'Mike'];
    this.timeLeft = 15;
  }

  ngOnInit(): void {
    this.driver = this.navigators[this.driverIndex];
  }

  ngOnChanges(): void {
    this.driver = this.navigators[this.driverIndex];
  }

  driverForHandler(event) {
    this.timeLeft = event.target.value;
    this.driverFor = event.target.value;
  }

  addNavigator(value: string) {
    this.navigators.push(value);
  }

  startMob() {
    this.interval = setInterval(() => {
      if (this.timeLeft !== 0) {
        this.timeLeft--;
      } else {
        this.stopMob();
        this.timeLeftHandler();
      }
    }, 1000);
  }

  stopMob() {
    clearInterval(this.interval);
  }

  timeLeftHandler() {
    if (this.driverIndex !== this.navigators.length - 1) {
      this.driverIndex++;
    } else {
      this.driverIndex = 0;
    }
    this.driver = this.navigators[this.driverIndex];
    this.timeLeft = this.driverFor;

    const dialog = confirm(`Next driver is: ${this.navigators[this.driverIndex]}.`);
    if (dialog) {
      this.startMob();
    }
    if (!dialog) {
      this.stopMob();
    }
  }

  removeNavigator(navigator: string) {
    const toRemove = this.navigators.findIndex((n) => n === navigator);
    this.navigators.splice(toRemove, 1);
  }
}
