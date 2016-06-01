import { Component, IterableDiffers, DoCheck } from '@angular/core';
import { DoCheckItem } from './DoCheckItemComponent'

@Component({
    selector: 'do-check',
    directives: [DoCheckItem],
    template: `
    <do-check-item [comment]="comment"
        *ngFor="let comment of comments" (onRemove)="removeComment($event)">
    </do-check-item>
    
    <button class="ui primary button" (click)="addComment()">
        Add
    </button>
    `
})
export class DoCheckCmp implements DoCheck {
    comments: any[];
    iterable: boolean;
    authors: string[];
    texts: string[];
    differ: any;
    
    constructor(differs: IterableDiffers) {
        this.differ = differs.find([]).create(null);
        this.comments = [];
        
        this.authors = ['Elliot', 'Helen', 'Jenny', 'Joe', 'Justen', 'Matt'];
        this.texts = [
            "I love Arsenal.", 
            "What is your name?", 
            "Awesome!"
        ];
        
        this.addComment();
    }
    
    getRandomInt(max: number): number {
        return Math.floor(Math.random() * (max + 1));
    }
    
    getRandomItem(array: string[]): string {
        let pos: number = this.getRandomInt(array.length - 1);
        return array[pos];
    }
    
    addComment(): void {
        this.comments.push({
            author: this.getRandomItem(this.authors),
            comment: this.getRandomItem(this.texts),
            likes: this.getRandomInt(20)
        });
    }
    
    removeComment(comment): void {
        let pos = this.comments.indexOf(comment);
        this.comments.splice(pos, 1);
    }
    
    ngDoCheck(): void {
        var changes = this.differ.diff(this.comments);
        
        if (changes) {
            changes.forEachAddedItem(r => console.log('Added', r.item));
            changes.forEachRemovedItem(r => console.log('Removed', r.item));
        }
    }
}