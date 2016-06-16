import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DefaultCmp } from './DefaultChangeComponent';
import { OnPushCmp } from './OnPushChangeComponent';
import { ObservableCmp } from './ObservableChangeComponent';
import { Profile } from '../../models/Profile';

@Component({
    selector: 'change-detection-sample-app',
    directives: [DefaultCmp, OnPushCmp, ObservableCmp],
    template: `
    <div class="ui page grid">
        <div class="two column row">
            <div class="column area">
                <default [profile]="profile1"></default>
            </div>
            <div class="column area">
                <on-push [profile]="profile2"></on-push>
            </div>
        </div>
    </div>
    <observable [items]="itemObservable"></observable>
    `
})
export class ChangeDetectionSample {
    profile1: Profile = new Profile('Chris', 'Lankford');
    profile2: Profile = new Profile('Santi', 'Cazorla');
    itemObservable: Observable<number>;
    
    constructor() {
        this.itemObservable = Observable.timer(100, 100).take(101);
    }
}