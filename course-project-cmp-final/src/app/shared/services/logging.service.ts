import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {

  info(message: any) {
    console.info(`${new Date()} -> ${message}`);
  }
}
