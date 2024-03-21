import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, ViewRef } from "@angular/core";

@Directive({
    selector:"[betterIf]"
})
export class BetterIf{
    @Input('betterIf') set condition(value: boolean){
        if (value)
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        else
            this.viewContainerRef.clear();
    }
    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef){}
}