import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
export var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        !sessionStorage.getItem('jwt') ? this._router.navigate(['login']) : this._router.navigate(['dashboard']);
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    encapsulation: ViewEncapsulation.None,
                    styleUrls: ['./app.component.css'],
                },] },
    ];
    AppComponent.ctorParameters = [
        { type: Router, },
    ];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map