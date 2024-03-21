import { Component, EventEmitter, Input, Output, ViewEncapsulation, inject } from '@angular/core';
import { Logger } from '../shared/services/logging.service';
import { AppService } from '../shared/services/app.service';
import { RoutesService } from '../shared/services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  logger: Logger;

  constructor(public app: AppService, public routes: RoutesService){
    this.logger = inject(Logger);
  }

  ngOnInit(){
    this.logger.info("initializing header");
  }
}
