import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { InlineStyle } from './components/InlineStyleComponent';
import { ExternalStyle } from './components/ExternalStyleComponent';
import { NativeEncapsulation } from './components/NativeEncapsulationComponent';
import { NoEncapsulation } from './components/NoEncapsulationComponent';
import { HostSample } from './components/HostSampleComponent';

@Component({
    selector: 'sandbox-app',
    directives:
    [
        InlineStyle,
        ExternalStyle,
        NativeEncapsulation,
        NoEncapsulation,
        HostSample
    ],
    template: `
    <inline-style></inline-style>
    <external-style></external-style>
    <native-encapsulation></native-encapsulation>
    <!-- <no-encapsulation></no-encapsulation> -->
    <host-sample></host-sample>
    `
})
class SandboxApp {

}

bootstrap(SandboxApp).catch((err: any) => console.error(err));
