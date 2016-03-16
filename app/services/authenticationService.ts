import {
    Injectable
    ,OnInit
    ,OnDestroy
} from 'angular2/core';


@Injectable()
export class AuthenticationService 
        implements OnInit,
                   OnDestroy {

    constructor() {
    } 
    
    ngOnInit() : void {
        console.log(">>>> AuthenticationService Init");
    }   
    ngOnDestroy() : void {
        console.log(">>>> AuthenticationService Destroy");
        
    }   
    
    protected _isAuthenticated : Boolean = false;
    
    public get Authenticated() : Boolean {
        
        return this._isAuthenticated;    
    };   
    public set Authenticated(auth: Boolean) {
        
        this._isAuthenticated = auth;    
    };
    
    
    Authenticate(userId: string,
                 password: string) {

        this._isAuthenticated = true;                         

        return this._isAuthenticated;    
    };  
    
}