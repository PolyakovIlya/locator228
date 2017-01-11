/**
 * Created by ilyapolyakov on 1/5/17.
 */
import {Routes, RouterModule} from '@angular/router'

import {LoginComponent} from './components/login'
import {RegisterComponent} from './components/register'
import {HomeComponent} from './components/home'
import {AuthGuard} from './guards'

const appRoutes: Routes = [
    {path: '', component: HomeComponent},// canActivate: [AuthGuard]
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);