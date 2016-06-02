import { Component } from '@angular/core';
import { NgIfImpl } from '../directives/ngIfImpl';
import { NgForImpl } from '../directives/ngForImpl';

@Component({
    selector: 'template-sample-app',
    directives: [NgIfImpl, NgForImpl],
    template: `
    <button class="ui primary button" (click)="toggle()">
        Toggle
    </button>
    
    <div *ngIfImpl="display">
        The message is displayed
    </div>
    
    <ul>
        <li *ngForImpl="let p of people">
            {{ p.name }} is {{ p.age }}
            <a href (click)="remove(p)">Remove</a>
        </li>
    </ul>
    
    <div class="ui form">
        <div class="fields">
            <div class="field">
                <label>Name</label>
                <input type="text" #name placeholder="Name">
            </div>
            <div class="field">
                <label>Age</label>
                <input type="text" #age placeholder="Age">
            </div>
        </div>
    </div>
    <div class="ui submit button" (click)="add(name, age)">
        Add
    </div>
    `
})
export class TemplateSample {
    display: boolean;
    people: any[];
    
    constructor() {
        this.display = true;
        this.people = [
            {name: 'Joe', age: 10},
            {name: 'Patrick', age: 21},
            {name: 'Melissa', age: 12},
            {name: 'Kate', age: 19}
        ];
    }
    
    toggle() {
        this.display = !this.display;
    }
    
    remove(p) {
        let idx: number = this.people.indexOf(p);
        this.people.splice(idx, 1);
        return false;
    }
    
    add(name, age) {
        this.people.push({name: name.value, age: age.value});
        name.value = '';
        age.value = '';
    }
}