// Angular Components    
import {
    Component
    ,OnInit
    ,OnDestroy
} from 'angular2/core';

import {
    Router
    ,RouteConfig 
    ,ROUTER_DIRECTIVES 
} from 'angular2/router';

// Services
import {AuthenticationService} from './services/AuthenticationService';

// Views and Controls
import {MenuPanel} from './panels/menu/menuPanel';

import {AnonymousHomePanel} from './panels/main/anonymousHomePanel';
import {AuthenticatedHomePanel} from './panels/main/authenticatedHomePanel';

import {LoginPanel} from './panels/login/LoginPanel';



@Component({
    selector: 'thisApp'
    ,template: 
    `
    <menu></menu>
    
    <div class="container">
        <router-outlet></router-outlet>
    </div>    
    `
    ,directives: [
        ROUTER_DIRECTIVES
        ,MenuPanel
    ] 
    
    ,providers: [
        AuthenticationService
    ]  

})

@RouteConfig([
    {
        path: '/',
        name: 'AnonymousHome',
        component: AnonymousHomePanel,
        useAsDefault: true
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPanel
    },    
    {
        path: '/home',
        name: 'AuthenticatedHome',
        component: AuthenticatedHomePanel
    },

    { path: '/**', redirectTo: ['AnonymousHome'] }
])

export class App
        implements OnInit,
                   OnDestroy {
       
    constructor(protected _router: Router) {
        
    } 
    
    ngOnInit(): void {
        console.log(">>>> App OnInit");    

        this._router.subscribe((path) => {
            console.log(">>>> Route Change: " + path); 
        });
    }
    
    ngOnDestroy(): void {
        console.log(">>>> App OnDestroy");    
    }
    
}