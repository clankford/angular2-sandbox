import { Component } from '@angular/core';
import { OnInitCmp } from './OnInitAndOnDestroyComponent';
import { OnChangeCmp } from './OnChangeComponent';
import { DoCheckCmp } from './DoCheckComponent';
import { AfterStarCmp } from './AfterStarComponent';

@Component({
    selector: 'lifecycle-sample-app',
    directives: [OnInitCmp, OnChangeCmp, DoCheckCmp, AfterStarCmp],
    template: `
    <h4 class="ui horizontal divider header">
        OnInit and OnDestroy
    </h4>
    
    <button class="ui primary button" (click)="toggle()">
        Toggle
    </button>
    <on-init *ngIf="display"></on-init>
    
    <h4 class="ui horizontal divider header">
        OnChange
    </h4>
    
    <div class="ui form">
        <div class="field">
            <label>Name</label>
            <input type="text" #namefld value="{{name}}" 
                (keyup)="setValues(namefld, commentfld)">
        </div>
        
        <div class="field">
            <label>Comment</label>
            <textarea (keyup)="setValues(namefld, commentfld)"
                rows="2" #commentfld>{{comment}}</textarea>
        </div>
    </div>
    <br\>
    <on-change [name]="name" [comment]="comment"></on-change>
    
    <h4 class="ui horizontal divider header">
        DoCheck
    </h4>
    <br\>
    <do-check></do-check>
    <br\>
    <afters *ngIf="displayAfters"></afters>
    <button class="ui primary button" (click)="toggleAfters()">
        Toggle
    </button>
    `
})
export class LifecycleSample {
    display: boolean;
    name: string;
    comment: string;
    displayAfters: boolean;
    
    constructor() {
        this.display = true;
        this.name = 'Chris Lankford';
        this.comment = 'Angular 2 kicks ass!';
        this.displayAfters = true;
    }
    
    toggle(): void {
        this.display = !this.display;
    }
    
    setValues(namefld, commentfld): void {
        this.name = namefld.value;
        this.comment = commentfld.value;
    }
    
    toggleAfters(): void {
        this.displayAfters = !this.displayAfters;
    }
}