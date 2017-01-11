/**
 * Created by ilyapolyakov on 1/11/17.
 */
import {Component} from '@angular/core'

import {User} from '../../models'
import {UserService} from '../../services'

@Component({
    selector: 'ui-map',
    templateUrl: 'map.component.html'
})

export class MapComponent {
    users: User[] = [];

    constructor(private userService: UserService) {};


}