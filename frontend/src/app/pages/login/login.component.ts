/**
 * Created by ilyapolyakov on 1/5/17.
 */
import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {AuthenticationService} from '../../services/authentication.service'

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(private router: Router, private authenticationService: AuthenticationService) {}

    ngOnInit() {

        //reset login status
        this.authenticationService.logout()
    }

    login() {
        this.loading = true;

        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if(result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Wrong username or password';
                    this.loading = false;
                }
            });
    }
}

