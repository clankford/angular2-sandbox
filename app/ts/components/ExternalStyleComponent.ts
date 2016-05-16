import { Component } from '@angular/core';
let externalCSSUrl: string = require('file-loader!../../css/external.css');

@Component({
    selector: 'external-style',
    styleUrls: [externalCSSUrl],
    template: `
    <h4 class="ui horizontal divider header">
        External style example
    </h4>
    
    <div class="highlight">
        This uses component <code>styleUrls</code> property
    </div>
    `
})
export class ExternalStyle {
}
