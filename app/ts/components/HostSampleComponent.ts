import { Component } from '@angular/core';
import { Popup } from '../directives/PopupDirective';

@Component({
    selector: 'host-sample',
    directives: [Popup],
    template: `
    <div class="ui message" popup #p1="popup" message="Clicked the message">
        <div class="header">
            Learning Directives
        </div>
        
        <p>
            This should use our Popup directive
        </p>
    </div>

    <i class="alarm icon" popup #p2="popup" message="Clicked the alarm icon"></i>

    <div style="margin-top: 20px;">
        <button (click)="p1.displayMessage()" class="ui button">
            Display popup for message element
        </button>

        <button (click)="p2.displayMessage()" class="ui button">
            Display popup for alarm icon
        </button>
    </div>
    `
})
export class HostSample {
}
