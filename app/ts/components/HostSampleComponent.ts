import { Component } from '@angular/core';
import { Popup } from '../directives/PopupDirective';

@Component({
    selector: 'host-sample',
    directives: [Popup],
    template: `
    <div class="ui message" popup message="Clicked the message">
        <div class="header">
            Learning Directives
        </div>
        
        <p>
            This should use our Popup directive
        </p>
    </div>
    
    <i class="alarm icon" popup message="Clicked the alarm icon"></i>
    `
})
export class HostSample {
}
