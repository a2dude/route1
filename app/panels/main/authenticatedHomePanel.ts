// Angular Components    
import {
    Component
    ,OnInit
    ,OnDestroy
} from 'angular2/core';

// Services


@Component({
    selector: 'authenticatedHome'
    ,template: `<h3 class="content-top">auth blah blah</h3>`
  
})
export class AuthenticatedHomePanel
        implements OnInit,
                   OnDestroy {
    
    constructor() {
    } 
    
    ngOnInit(): void {
        console.log(">>>> AuthenticatedHomePanel OnInit");            
    }
    ngOnDestroy(): void {
        console.log(">>>> AuthenticatedHomePanel OnDestroy");            
    }
}