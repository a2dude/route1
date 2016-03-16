# route1

This project illustrates an issue with Angular 2 routing.  

## Installation

npm install

It is assumed that Typescript and NPM are already installed

## Issue

There appears to be a difference in behaviour between routerLink in html and router.navigate(...).  

Using routerLink in html provides the expected behaviour when navigating between states.  Using [routerLink]="['/AuthenticatedHome']" in the login panel correctly moves to the expected ui state.  

However the following code this._router.navigate(['/AuthenticatedHome']); while it takes the app to the same ui state it causes the app to be reloaded.

## Repro

1. npm run web

2. Browser: http://localhost:8080 and open console

3. click on Login and input user email and password

4. select Login (Link) observe the behaviour from trace messages in the console

5. Reload browser

6. click on Login and input user email and password

7. select Login (Code) observe the app being reloaded


## Log - Chrome

DEPRECATION WARNING: 'enqueueTask' is no longer supported and will be removed in next major release. Use addTask/addRepeatingTask/addMicroTask
DEPRECATION WARNING: 'dequeueTask' is no longer supported and will be removed in next major release. Use removeTask/removeRepeatingTask/removeMicroTask
     App OnInit
     MenuPanel OnInit
Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.
     AnonymousHomePanel OnInit
Uncaught (in promise) TypeError: object is not a constructor(…)
     Route Change: 
     AnonymousHomePanel OnDestroy
     LoginPanel OnInit
     Route Change: login
     LoginPanel OnDestroy
     AuthenticatedHomePanel OnInit
     Route Change: home
Navigated to http://localhost:8080/?
Uncaught (in promise) TypeError: object is not a constructor(…)
DEPRECATION WARNING: 'enqueueTask' is no longer supported and will be removed in next major release. Use addTask/addRepeatingTask/addMicroTask
DEPRECATION WARNING: 'dequeueTask' is no longer supported and will be removed in next major release. Use removeTask/removeRepeatingTask/removeMicroTask
     App OnInit
     MenuPanel OnInit
Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.
     AuthenticatedHomePanel OnInit
     Route Change: home


## Log - Edge

HTML1300: Navigation occurred.
localhost:8080
HTML1527: DOCTYPE expected. Consider adding a valid HTML5 doctype: "<!DOCTYPE html>".
localhost:8080 (1,1)
DEPRECATION WARNING: 'enqueueTask' is no longer supported and will be removed in next major release. Use addTask/addRepeatingTask/addMicroTask
angular2-polyfills.js (1152,10)
DEPRECATION WARNING: 'dequeueTask' is no longer supported and will be removed in next major release. Use removeTask/removeRepeatingTask/removeMicroTask
angular2-polyfills.js (1152,10)
     App OnInit
route1.js (268,21)
     MenuPanel OnInit
route1.js (81,21)
Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.
angular2.dev.js (353,5)
     AnonymousHomePanel OnInit
route1.js (125,21)
     Route Change: 
route1.js (270,25)
     AnonymousHomePanel OnDestroy
route1.js (128,21)
     LoginPanel OnInit
route1.js (200,21)
     Route Change: login
route1.js (270,25)
     LoginPanel OnDestroy
route1.js (203,21)
     AuthenticatedHomePanel OnInit
route1.js (159,21)
     Route Change: home
route1.js (270,25)
     AuthenticatedHomePanel OnDestroy
route1.js (162,21)
     LoginPanel OnInit
route1.js (200,21)
     Route Change: login
route1.js (270,25)
     Route Change: login
route1.js (270,25)
     LoginPanel OnDestroy
route1.js (203,21)
     AuthenticatedHomePanel OnInit
route1.js (159,21)
EXCEPTION: Attempt to use a dehydrated detector: LoginPanel_0 -> ngSubmit
   EXCEPTION: Attempt to use a dehydrated detector: LoginPanel_0 -> ngSubmit
   angular2.dev.js (23597,9)
   STACKTRACE:
   angular2.dev.js (23597,9)
   Error: Attempt to use a dehydrated detector: LoginPanel_0 -> ngSubmit
   at BaseException (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:7464:7)
   at DehydratedException (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:4928:7)
   at AbstractChangeDetector.prototype.throwDehydratedError (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:8274:7)
   at AbstractChangeDetector.prototype.handleEvent (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:8110:9)
   at Anonymous function (Function code:1137:95)
   at Anonymous function (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:13188:13)
   at cb (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:13592:15)
   at Anonymous function (http://localhost:8080/node_modules/angular2/bundles/angular2-polyfills.js:1679:26)
   at Zone.prototype.run (http://localhost:8080/node_modules/angular2/bundles/angular2-polyfills.js:1243:14)
   at Anonymous function (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:13543:15)

-----async gap-----
Error
   at _getStacktraceWithUncaughtError (http://localhost:8080/node_modules/angular2/bundles/angular2-polyfills.js:2244:6)
   at Anonymous function (http://localhost:8080/node_modules/angular2/bundles/angular2-polyfills.js:2293:14)
   at arguments[0] (http://localhost:8080/node_modules/angular2/bundles/angular2-polyfills.js:1671:22)

-----async gap-----
Error
   at _getStacktraceWithUncaughtError (http://localhost:8080/node_modules/angular2/bundles/angular2-polyfills.js:2244:6)
   at Anonymous function (http://localhost:8080/node_modules/angular2/bundles/angular2-polyfills.js:2293:14)
   at NgZone.prototype._createInnerZone (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:13531:7)
   at NgZone (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:13397:9)
   at createNgZone (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:12460:5)
   at PlatformRef_.prototype.application (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:12535:7)
   at bootstrap (http://localhost:8080/node_modules/angular2/bundles/angular2.dev.js:25335:5)
   at execute (http://localhost:8080/route1.js:334:13)
   at ensureEvaluated (http://localhost:8080/node_modules/systemjs/dist/system.src.js:3218:5)
   at execute (http://localhost:8080/node_modules/systemjs/dist/system.src.js:3336:13)
   angular2.dev.js (23597,9)

SCRIPT5022: Attempt to use a dehydrated detector: LoginPanel_0 -> ngSubmit
angular2.dev.js (1281,9)
     Route Change: home
route1.js (270,25)





