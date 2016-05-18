import { Directive } from '@angular/core';

@Directive({
    selector: '[popup]'
})
export class Popup {
    constructor() {
        console.log('Directive bound');
    }
}
