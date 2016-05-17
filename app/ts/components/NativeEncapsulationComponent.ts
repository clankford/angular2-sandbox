import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: `native-encapsulation`,
    styles: [`
    .highlight {
        text-align: center;
        border: 2px solid black;
        border-radius: 3px;
        margin-bottom: 20px;
    }
    `],
    template: `
    <h4 class="ui horizontal divider header">
        Native encapsulation example
    </h4>
    
    <div class="highlight">
        This component uses <code>ViewEncapsulation.Native</code>
    </div>
    `,
    encapsulation: ViewEncapsulation.Native
})
export class NativeEncapsulation {
}
