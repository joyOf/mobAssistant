import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'mob-assistant';
  driver: string;
  players: string[];

  timeLeft: number;
  driverFor: number;
  private interval;
  driverIndex = 0;

  constructor() {
    this.players = ['Lars', 'Lulu', 'Mike'];
    this.timeLeft = 15;
    this.driverFor = 15;
  }

  ngOnInit(): void {
    this.driver = this.players[this.driverIndex];
  }

  ngOnChanges(): void {
    this.driver = this.players[this.driverIndex];
  }

  start() {
    this.interval = setInterval(() => {
      if (this.timeLeft !== 0) {
        this.timeLeft--;
      } else {
        this.pause();
        this.timeLeftHandler();
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }

  stop() {
    clearInterval(this.interval);
    this.timeLeft = this.driverFor;
  }

  driverForHandler(event) {
    this.timeLeft = event.target.value;
    this.driverFor = event.target.value;
  }

  timeLeftHandler() {
    if (this.driverIndex !== this.players.length - 1) {
      this.driverIndex++;
    } else {
      this.driverIndex = 0;
    }
    this.driver = this.players[this.driverIndex];
    this.timeLeft = this.driverFor;

    const dialog = confirm(`Next driver is: ${this.players[this.driverIndex]}.`);
    if (dialog) {
      this.start();
    }
    if (!dialog) {
      this.pause();
    }
  }

  addNavigator(value: string) {
    this.players.push(value);
  }

  removePlayer(navigator: string) {
    const toRemove = this.players.findIndex((n) => n === navigator);
    this.players.splice(toRemove, 1);
  }
}
