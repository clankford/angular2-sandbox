import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'sandbox-app',
    template: `
    Hello World!
    `
})
class SandboxApp {

}

bootstrap(SandboxApp).catch((err: any) => console.error(err));
