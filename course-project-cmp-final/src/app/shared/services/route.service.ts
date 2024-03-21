import { Injectable } from "@angular/core";
import { Logger } from "./logging.service";
import { AppService } from "./app.service";

@Injectable({
  providedIn: "root"
})
export class RoutesService{
  HOME = "";
  RECIPES = "/recipes";
  SHOPPINGLIST = "shopping-list";

  constructor(private logger: Logger, public app: AppService){}

  changeRoute(routeTo: string){
    this.logger.info(`changing route to ${routeTo}`);
    this.app.currentRoute = routeTo;
  }
}