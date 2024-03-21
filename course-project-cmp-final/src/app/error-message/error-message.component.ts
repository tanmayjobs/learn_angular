import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css'
})
export class ErrorMessageComponent {
  errorMessage: string = "";

  constructor(public route: ActivatedRoute){}

  ngOnInit(){
    this.route.data.subscribe((data: Params) => {
      this.errorMessage = data["errorMessage"];
    });
  }
}
