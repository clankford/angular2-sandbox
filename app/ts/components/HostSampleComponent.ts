import { Component } from '@angular/core';
import { Popup } from '../directives/PopupDirective';

@Component({
    selector: 'host-sample',
    directives: [Popup],
    template: `
    <div class="ui message" popup>
        <div class="header">
            Learning Directives
        </div>
        
        <p>
            This should use our Popup directive
        </p>
    </div>
    `
})
export class HostSample {
}
