import {
    Component,
    Directive,
    Input,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
} from '@angular/core';
import { Profile } from '../../models/Profile';

@Component({
    selector: 'on-push',
    inputs: ['profile'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <h4 class="ui horizontal divider header">
        OnPush Strategy
    </h4>
    
    <form class="ui form">
        <div class="field">
            <label>First Name</label>
            <input
                type="text"
                [(ngModel)]="profile.first"
                placeholder="First Name">
        </div>
        <div class="field">
            <label>Last Name</label>
            <input
                type="text"
                [(ngModel)]="profile.last"
                placeholder="Last Name">
        </div>
    </form>
    <div>
        {{profile.lastChanged() | date:'medium'}}
    </div>
    `
})
export class OnPushCmp {
    @Input() profile: Profile;
}