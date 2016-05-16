import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { InlineStyle } from './components/InlineStyleComponent';
import { ExternalStyle } from './components/ExternalStyleComponent';

@Component({
    selector: 'sandbox-app',
    directives: [ InlineStyle, ExternalStyle ],
    template: `
    <inline-style></inline-style>
    <external-style></external-style>
    `
})
class SandboxApp {

}

bootstrap(SandboxApp).catch((err: any) => console.error(err));
