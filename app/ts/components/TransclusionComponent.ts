import { Component } from '@angular/core';

@Component({
    selector: '[message]',
    inputs: ['header'],
    host: {
        'class': 'ui message'
    },
    template: `
    <div>
        <div class="header">
            {{ header }}
        </div>
        <p>
            <ng-content></ng-content>
        </p>
    </div>
    `
})
export class Message {
    header: string;

    ngOnInit(): void {
        console.log('header', this.header);
    }
}
