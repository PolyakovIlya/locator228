/**
 * Created by ilyapolyakov on 1/5/17.
 */
import {Component, OnInit} from '@angular/core'

import {User} from '../../models/user'
import {UserService} from '../../services/user.service'

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
    users: User[] = [];

    filter: Object = {
        hideFish: false,
        hideSeas: false,
        hideTemp: false
    };


    selectedFishDesc: FishDesc = null;

    constructor() {};

    changeFilterHandler(evt: Object) {
        console.log(evt);
        var newValue={};
        newValue[evt["filterName"]] =  evt["value"];

        this.filter= Object.assign({},this.filter,newValue);
    }

    ngOnInit() {

    }
}