import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from './auth.service';

export const productGuardGuard: CanActivateFn = (route, state) => {

    if (inject(AuthService).loggedIn()) {
        return true
    } else {
        inject(Router).navigate(['unauthorized']);
        return false;
    }
};
