import { Component } from '@angular/core';
import { Message } from './TransclusionComponent.ts'

@Component({
    selector: 'transclusion-sample-app',
    directives: [Message],
    template: `
    <div message header="My Message">
        This is the content of the message
    </div>
    `
})
export class TransclusionSample {
}
