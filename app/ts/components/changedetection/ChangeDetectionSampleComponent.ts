import { Component } from '@angular/core';
import { DefaultCmp } from './DefaultChangeComponent.ts';
import { OnPushCmp } from './OnPushChangeComponent.ts';
import { Profile } from '../../models/Profile.ts';

@Component({
    selector: 'change-detection-sample-app',
    directives: [DefaultCmp, OnPushCmp],
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
    `
})
export class ChangeDetectionSample {
    profile1: Profile = new Profile('Chris', 'Lankford');
    profile2: Profile = new Profile('Santi', 'Cazorla');
}