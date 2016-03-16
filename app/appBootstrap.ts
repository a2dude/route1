// Angular Components    
import {
    bootstrap
}    from 'angular2/platform/browser'

import {
    provide    
} from 'angular2/core'

import {
    ROUTER_PROVIDERS
    ,LocationStrategy
    ,HashLocationStrategy
    ,APP_BASE_HREF
} from 'angular2/router';

// App
import {App} from './app'

bootstrap(App, [
 ROUTER_PROVIDERS
 ,provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
