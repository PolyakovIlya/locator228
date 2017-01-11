import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
// import { fakeBackendProvider } from './helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import {AuthGuard} from './guards'
import { AuthenticationService, UserService } from './services'

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
    imports: [
        BrowserModule,
        ComponentsModule,
        PagesModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService

        //for fake backend
        // fakeBackendProvider,
        // MockBackend,
        // BaseRequestOptions
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }