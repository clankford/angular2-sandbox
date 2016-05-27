import { Component, Input, DoCheck, EventEmitter, KeyValueDiffers } from '@angular/core';

@Component({
    selector: 'do-check-item',
    inputs: ['comment'],
    outputs: ['onRemove'],
    template: `
    <div class="ui feed">
        <div class="event">
            <div class="label" *ngIf="comment.author">
                <img src="/app/images/avatars/{{comment.author.toLowerCase()}}.jpg">
            </div>
            <div class="content">
                <div class="summary">
                    <a class="user">
                        {{comment.author}}
                    </a> posted a comment
                    <div class="date">
                        1 Hour Ago
                    </div>
                </div>
                <div class="extra text">
                    {{comment.comment}}
                </div>
                <div class="meta">
                    <a class="trash" (click)="remove()">
                        <i class="trash icon"></i> Remove
                    </a>
                    <a class="trash" (click)="clear()">
                        <i class="eraser icon"></i> Clear
                    </a>
                    <a class="like" (click)="like()">
                        <i class="like icon"></i> {{comment.likes}} Likes
                    </a>
                </div>
            </div>
        <div>
    </div>
    `
})
export class DoCheckItem implements DoCheck {
    @Input('comment') comment: any;
    onRemove: EventEmitter<any>;
    differ: any;
    
    constructor(differs: KeyValueDiffers) {
        this.differ = differs.find([]).create(null);
        this.onRemove = new EventEmitter();
    }
    
    ngDoCheck(): void {
        var changes = this.differ.diff(this.comment);
        
        if (changes) {
            changes.forEachAddedItem(r => this.logChange('added', r));
            changes.forEachRemovedItem(r => this.logChange('removed', r));
            changes.forEachChangedItem(r => this.logChange('changed', r));
        }
    }
    
    logChange(action, r) {
        if (action === 'changed') {
            console.log(r.key, action, 'from', r.previousValue, 'to', r.currentValue);
        }
        if (action === 'added') {
            console.log(action, r.key, 'with', r.currentValue);
        }
        if (action === 'removed') {
            console.log(action, r.key, '(was ' + r.previousValue + ')');
        }
    }
    
    remove(): void {
        this.onRemove.emit(this.comment);
    }
    
    clear(): void {
        delete this.comment.comment;
    }
    
    like(): void {
        this.comment.likes += 1;
    }
}