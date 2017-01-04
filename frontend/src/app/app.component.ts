import { Component } from '@angular/core';
import '../../public/scss/styles.scss';

import './app.component.scss';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    items: any = [];
    name: String= "asdasd";

    constructor(){

    }
}