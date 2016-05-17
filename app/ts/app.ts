import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { InlineStyle } from './components/InlineStyleComponent';
import { ExternalStyle } from './components/ExternalStyleComponent';
import { NativeEncapsulation } from './components/NativeEncapsulationComponent';

@Component({
    selector: 'sandbox-app',
    directives: [ InlineStyle, ExternalStyle, NativeEncapsulation ],
    template: `
    <inline-style></inline-style>
    <external-style></external-style>
    <native-encapsulation></native-encapsulation>
    `
})
class SandboxApp {

}

bootstrap(SandboxApp).catch((err: any) => console.error(err));
