/**
 * Created by ilyapolyakov on 1/11/17.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AuthGuard } from '../guards'
import { AuthenticationService, UserService } from '../services'

import { ComponentsModule } from '../components/components.module';
import { WelcomeComponent } from './welcome'
import { LoginComponent } from './login'
import { RegisterComponent } from './register'
import { HomeComponent } from './home'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ComponentsModule
    ],
    declarations: [
        WelcomeComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ],
    exports: [
        WelcomeComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ]
})

export class PagesModule { }