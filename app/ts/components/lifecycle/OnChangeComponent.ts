import { Component, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
    selector: 'on-change',
    inputs: ['name', 'comment'],
    template: `
    <div class="ui comments">
        <div class="comment">
            <a class="avatar">
                <img src="app/images/avatars/matt.jpg">
            </a>
            <div class="content">
                <a class="author">{{name}}</a>
                <div class="text">
                    {{comment}}
                </div>
            </div>
        </div>
    </div>
    `
})
export class OnChangeCmp implements OnChanges {
    @Input('name') name: string;
    @Input('comment') comment: string;
    
    ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
        console.log('Changes', changes);
    }
}