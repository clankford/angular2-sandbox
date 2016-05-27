import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'on-init',
    template: `
    <div class="ui label">
        <i class="cubes icon"></i> Init/Destroy
    </div>
    `
})
export class OnInitCmp implements OnInit, OnDestroy {
    ngOnInit(): void {
        console.log('On init');
    }
    
    ngOnDestroy(): void {
        console.log('On destroy');
    }
}