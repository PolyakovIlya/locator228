import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { TableComponent } from "./table/table.component";


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        TableComponent
    ],
    exports: [
        TableComponent
    ]
})

export class ComponentsModule { }