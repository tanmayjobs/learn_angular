import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs: string[] = [];
  secretPassword: string = "Wow I would never know!";
  showPassword: boolean = false;

  hashPassword(){
    let hashed: string = "";
    for (const _ of this.secretPassword){
      hashed += "*";
    }
    return hashed;
  }

  togglePasswordView(){
    this.showPassword = !this.showPassword;
    this.logs.push((new Date()).toString());
  }
}
