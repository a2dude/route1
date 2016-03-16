// Angular Components    
import {
    Component
    ,OnInit
    ,OnDestroy
} from 'angular2/core';

import {
    ROUTER_DIRECTIVES 
} from 'angular2/router';


// Services
import {AuthenticationService} from '../../services/AuthenticationService';



@Component({
    selector: 'menu'
    ,templateUrl: "./app/panels/menu/menu.html"
    
    ,directives: [
        ROUTER_DIRECTIVES
    ] 
})
export class MenuPanel
        implements OnInit,
                   OnDestroy {
                       
    appVer: number = 4;                       
    
    constructor(protected _authenticationService: AuthenticationService) {
    } 
    
    ngOnInit(): void {
        console.log(">>>> MenuPanel OnInit");    
        
    }
    ngOnDestroy(): void {
        console.log(">>>> MenuPanel OnDestroy");    
        
    }
    public get Authenticated() : Boolean {
        
        return this._authenticationService.Authenticated;
    }
}