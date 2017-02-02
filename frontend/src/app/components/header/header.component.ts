/**
 * Created by ilyapolyakov on 1/12/17.
 */
import { Component } from '@angular/core';
import {Router} from '@angular/router'

import {AuthenticationService} from '../../services/authentication.service'
import {SearchService} from '../../services/search.service'

@Component({
    selector: 'ui-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    value = '';

    constructor(private router: Router, private authenticationService: AuthenticationService, private searchService: SearchService) {}

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['welcome']);
    }

    searchInput(value: string) {
        this.value = value;
        console.log(value);
        this.searchService.searchText.next(this.value);
    }
}