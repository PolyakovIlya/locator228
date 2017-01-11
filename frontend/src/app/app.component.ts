import { Component } from '@angular/core';
import '../../public/scss/styles.scss';

import './app.component.scss';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    items: any = [];
    name: String= "asdasd";

    constructor(){

    }
}