import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AgmCoreModule } from 'angular2-google-maps/core';

import { requestOptionsProvider }   from './default-request-options.service';

// used to create fake backend
// import { fakeBackendProvider } from './helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import {AuthGuard} from './guards'
import {AuthenticationService, UserService} from './services'
import {LoginComponent} from './components/login'
import {RegisterComponent} from './components/register/register.component'
import {HomeComponent} from './components/home'
import {MapComponent} from './components/map'

import { ComponentsModule } from "./components/components.module";

@NgModule({
    imports: [
        BrowserModule,
        ComponentsModule,
        FormsModule,
        HttpModule,
        routing
        // AgmCoreModule.forRoot({
        //     apiKey: 'AIzaSyCcG8Sv84JS3K5YmDG-geW-X45X10-bEHI'
        // })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        MapComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        requestOptionsProvider

        //for fake backend
        // fakeBackendProvider,
        // MockBackend,
        // BaseRequestOptions
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }