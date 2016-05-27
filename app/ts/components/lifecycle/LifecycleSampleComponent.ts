import { Component } from '@angular/core';
import { OnInitCmp } from './OnInitAndOnDestroyComponent';

@Component({
    selector: 'lifecycle-sample-app',
    directives: [OnInitCmp],
    template: `
    <h4 class="ui horizontal divider header">
        OnInit and OnDestroy
    </h4>
    
    <button class="ui primary button" (click)="toggle()">
        Toggle
    </button>
    <on-init *ngIf="display"></on-init>
    `
})
export class LifecycleSample {
    display: boolean;
    
    constructor() {
        this.display = true;
    }
    
    toggle(): void {
        this.display = !this.display;
    }
}