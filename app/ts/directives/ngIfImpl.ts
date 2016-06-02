import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
    selector: '[ngIfImpl]',
    inputs: ['ngIfImpl']
})
export class NgIfImpl {
    constructor(private viewContainer: ViewContainerRef,
                private template: TemplateRef<any>) {}
    
    set ngIfImpl(condition) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        else {
            this.viewContainer.clear();
        }
    }
}