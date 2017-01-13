/**
 * Created by ilyapolyakov on 1/11/17.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core'


@Component({
    selector: 'ui-tools',
    templateUrl: 'tools.component.html',
    styleUrls: ['./tools.component.scss'],
})

export class ToolsComponent {
    @Input()
    filters: Object;

    @Output()
    changeFilter: EventEmitter<Object> = new EventEmitter<Object>();

    public checkedFish: boolean = false;
    public checkedSea: boolean = false;

    constructor() {};

    ngOnInit(){
        this.checkedFish = this.filters && this.filters["checkedFish"];
        this.checkedSea = this.filters && this.filters["checkedSea"];
    }


    handlerCheckbox(evt: any, filterName: string) {
        this.changeFilter.emit({filterName: filterName, value: evt});
    }


}