import { Component, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Ingredient } from './shared/models/ingredient.model';
import { Logger } from './shared/services/logging.service';
import { AppService } from './shared/services/app.service';
import { RoutesService } from './shared/services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  ingredients: Ingredient[] = [];
  constructor(private logger: Logger, public app: AppService, public routes: RoutesService){}
  ngOnInit(){
    this.logger.info("initializing app");
  }
}
