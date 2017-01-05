/**
 * Created by ilyapolyakov on 1/5/17.
 */
import {Component, OnInit} from '@angular/core'

import {User} from '../_models'
import {UserService} from '../_services'

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {};

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            })
    }
}