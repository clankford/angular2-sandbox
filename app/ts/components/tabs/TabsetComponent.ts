import { Component, AfterContentInit, QueryList, Query } from '@angular/core';
import { Tab } from './TabComponent';

@Component({
    selector: 'tabset',
    template: `
    <div class="ui top attached tabular menu">
        <a *ngFor="let tab of tabs"
            class="item" [class.active]="tab.active"
            (click)="setActive(tab)">
            
            {{ tab.title }}
        </a>
    </div>
    <ng-content></ng-content>
    `
})
export class Tabset implements AfterContentInit {
    tabs: QueryList<Tab>;
    
    constructor(@Query(Tab) tabs:QueryList<Tab>) {
        this.tabs = tabs;
    }
    
    ngAfterContentInit() {
        this.tabs.toArray()[0].active = true;
    }
    
    setActive(tab: Tab) {
        this.tabs.toArray().forEach((t) => t.active = false);
        tab.active = true;
    }
}