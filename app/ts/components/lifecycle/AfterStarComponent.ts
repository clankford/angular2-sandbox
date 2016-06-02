import { 
    Component,
    OnInit,
    OnDestroy,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked 
} from '@angular/core'

@Component({
    selector: 'afters',
    template: `
    <div class="ui label">
        <i class="list icon"></i> Counter: {{ counter }}
    </div>
    
    <button class="ui primary button" (click)="inc()">
        Increment
    </button>
    `
})
export class AfterStarCmp implements OnInit, OnDestroy, DoCheck,
                           OnChanges, AfterContentInit,
                           AfterContentChecked, AfterViewInit,
                           AfterViewChecked {
    counter: number;
    
    constructor() {
        console.log('AfterCmd -------- [constructor]');
        this.counter = 1;
    }
    
    inc() {
        console.log('AfterCmd -------- [counter]');
        this.counter += 1;
    }
    
    ngOnInit() {
        console.log('AfterCmd - OnInit');
    }
    
    ngOnDestroy() {
        console.log('AfterCmd - OnDestroy');
    }
    
    ngDoCheck() {
        console.log('AfterCmp - DoCheck');
    }
    
    ngOnChanges() {
        console.log('AfterCmp - OnChanges');
    }
    
    ngAfterContentInit() {
        console.log('AfterCmp - AfterContentInit');
    }
    
    ngAfterContentChecked() {
        console.log('AfterCmp - AfterContentChecked');
    }
    
    ngAfterViewInit() {
        console.log('AfterCmp - AfterViewInit');
    }
    
    ngAfterViewChecked() {
        console.log('AfterCmp - AfterViewChecked');
    }
}