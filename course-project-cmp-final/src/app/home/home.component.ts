import { Component, ViewEncapsulation } from "@angular/core";
import { CanDeactivateComponent } from "../shared/services/guard.service";
import { AppService } from "../shared/services/app.service";

@Component({
    selector: "home",
    templateUrl: "home.component.html",
    styleUrl: "home.component.css",
})
export class HomeComponent implements CanDeactivateComponent{
    constructor(public app: AppService){}
    canDeactivate(url: string): boolean {
        if (url == "/recipes"){
            if (!this.app.isLoggedIn){
                return confirm("Do you want to see the recipe, even if you are not logged in?");
            }
        }
        return true;
    }
}