/**
 * Created by ilyapolyakov on 1/4/17.
 */
import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate() {
        if(localStorage.getItem('currentUser')) {
            //if logged return true
            return true
        }

        this.router.navigate(['welcome']);
        return false
    }
}