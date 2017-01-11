import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/ts/core';

import { MapComponent } from './map'
import { ToolsComponent } from './tools'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCcG8Sv84JS3K5YmDG-geW-X45X10-bEHI'
        })
    ],
    declarations: [
        MapComponent,
        ToolsComponent
    ],
    exports: [
        MapComponent,
        ToolsComponent
    ]
})

export class ComponentsModule { }