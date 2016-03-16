// Angular Components    
import {
    Component
    ,OnInit
    ,OnDestroy
} from 'angular2/core';

import {
    Router
    ,ROUTER_DIRECTIVES 
} from 'angular2/router';

// Services
import {AuthenticationService} from '../../services/AuthenticationService';


@Component({
    selector: 'login'
    ,templateUrl: "./app/panels/login/login.html"
    ,directives: [
        ROUTER_DIRECTIVES    
    ]
})
export class LoginPanel
        implements OnInit,
                   OnDestroy {

    constructor(protected _authenticationService: AuthenticationService,
                protected _router: Router) {
    } 
    
    ngOnInit(): void {
        console.log(">>>> LoginPanel OnInit");    
    }
    ngOnDestroy(): void {
        console.log(">>>> LoginPanel OnDestroy");    
    }

    public userId: string;
    public password: string;
    
    public rememberMe: Boolean;
    

    public authenticate(userId: string, password: string) {
        this._authenticationService.Authenticate(this.userId, this.password);
    };
    public loginCode(userId: string, password: string) {
        this._authenticationService.Authenticate(this.userId, this.password);
            
        this._router.navigate(['/AuthenticatedHome']); 
    };
    
    
    public cancel() {
        this._router.navigate(["AnonymousHome"]);    
    };
}