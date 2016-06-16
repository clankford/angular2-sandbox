import {
    Component,
    Directive,
    Input,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
} from '@angular/core';
import { Profile } from '../../models/Profile.ts';

@Component({
    selector: 'default',
    inputs: ['profile'],
    template: `
    <h4 class="ui horizontal divider header">
        Default Strategy
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
export class DefaultCmp {
    @Input() profile: Profile;
}