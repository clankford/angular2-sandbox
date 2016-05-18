import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[popup]'
})
export class Popup {
    constructor(_elementRef: ElementRef) {
        console.log(_elementRef);
    }
}
