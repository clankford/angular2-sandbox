import { Component } from '@angular/core';
import { Tabset } from './TabsetComponent';
import { Tab } from './TabComponent';

@Component({
    selector: 'tabs-sample-app',
    directives: [Tabset, Tab],
    template: `
    <tabset>
        <tab title="First tab">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quibusdam magni quia ut harum facilis, ullam deleniti porro 
            dignissimos quasi at molestiae sapiente natus, neque voluptatum 
            ad consequuntur cupiditate nemo sunt
        </tab>
        <tab *ngFor="let tab of tabs" [title]="tab.title">
            {{ tab.content }}
        </tab>
    </tabset>
    `
})
export class TabsSample {
    tabs: any;

    constructor() {
        this.tabs = [
          { title: 'About', content: 'This is the About tab' },
          { title: 'Blog', content: 'This is our blog' },
          { title: 'Contact us', content: 'Contact us here' },  
        ];
    }
}