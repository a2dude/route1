// Angular Components    
import {
    Component
    ,OnInit
    ,OnDestroy
} from 'angular2/core';

// Services


@Component({
    selector: 'anonymousHome'
    ,template: `<h3 class="content-top">anonymousHome blah blah</h3>`
 
})
export class AnonymousHomePanel
        implements OnInit,
                   OnDestroy {
    
    constructor() {
    } 
    
    ngOnInit(): void {
        console.log(">>>> AnonymousHomePanel OnInit");            
    }
    ngOnDestroy(): void {
        console.log(">>>> AnonymousHomePanel OnDestroy");            
    }
}