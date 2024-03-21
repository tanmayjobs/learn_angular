import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AppService{
    currentTheme: string = "light";
    currentRoute: string = "/recipes";

    isLoggedIn: boolean = false;
}
