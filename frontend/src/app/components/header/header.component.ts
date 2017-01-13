/**
 * Created by ilyapolyakov on 1/12/17.
 */
import { Component } from '@angular/core';
import {Router} from '@angular/router'

import {AuthenticationService} from '../../services/authentication.service'

@Component({
    selector: 'ui-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private router: Router, private authenticationService: AuthenticationService) {}

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['welcome']);
    }
}