import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { InlineStyle } from './components/InlineStyleComponent';
import { ExternalStyle } from './components/ExternalStyleComponent';
import { NativeEncapsulation } from './components/NativeEncapsulationComponent';
import { NoEncapsulation } from './components/NoEncapsulationComponent';
import { HostSample } from './components/HostSampleComponent';
import { TransclusionSample } from './components/TransclusionSampleComponent';
import { TabsSample } from './components/tabs/TabsSampleComponent';

@Component({
    selector: 'sandbox-app',
    directives:
    [
        InlineStyle,
        ExternalStyle,
        NativeEncapsulation,
        NoEncapsulation,
        HostSample,
        TransclusionSample,
        TabsSample
    ],
    template: `
    <div style="margin: 60px;">
        <inline-style></inline-style>
        <external-style></external-style>
        <native-encapsulation></native-encapsulation>
        <!-- <no-encapsulation></no-encapsulation> -->
        <host-sample></host-sample>
        <transclusion-sample-app></transclusion-sample-app>
        <tabs-sample-app></tabs-sample-app>
    </div>
    `
})
class SandboxApp {

}

bootstrap(SandboxApp).catch((err: any) => console.error(err));
