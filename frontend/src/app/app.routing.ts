/**
 * Created by ilyapolyakov on 1/5/17.
 */
import {Routes, RouterModule} from '@angular/router'

import {LoginComponent} from './pages/login'
import {RegisterComponent} from './pages/register'
import {HomeComponent} from './pages/home'
import {AuthGuard} from './guards'

const appRoutes: Routes = [
    {path: '', component: HomeComponent},// canActivate: [AuthGuard]
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);