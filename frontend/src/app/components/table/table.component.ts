import { Component } from '@angular/core';
import './table.component.scss';

@Component({
    selector: 'ui-table',
    templateUrl: './table.component.html',
})
export class TableComponent {

    rows: any = [{},{},{},{},{}];

    constructor(){

    }
}