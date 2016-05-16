import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { InlineStyle } from './components/InlineStyleComponent';

@Component({
    selector: 'sandbox-app',
    directives: [ InlineStyle ],
    template: `
    <inline-style></inline-style>
    `
})
class SandboxApp {

}

bootstrap(SandboxApp).catch((err: any) => console.error(err));
