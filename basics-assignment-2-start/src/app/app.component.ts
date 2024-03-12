import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string;
  bgColor: string;
  items: number[];

  constructor() {
    this.userName = ""
    this.bgColor = "#" + Math.random().toString(16).substring(2,8);
    this.items = [1, 2, 3, 4];
  }

  clearName(){
    this.userName = "";
  }
}
