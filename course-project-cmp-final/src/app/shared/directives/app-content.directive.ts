import { Directive, HostBinding, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { AppService } from "../services/app.service";

@Directive({
    selector: "[showContentOnRoute]",
})
export class ShowContentOnRoute{
    @Input('showContentOnRoute') set isOnRoute(route: string){
        if (route == this.app.currentRoute)
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        else
            this.viewContainerRef.clear();
    }
    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, private app: AppService){}
}