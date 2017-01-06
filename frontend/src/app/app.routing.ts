/**
 * Created by ilyapolyakov on 1/5/17.
 */
import {Routes, RouterModule} from '@angular/router'

import {LoginComponent} from './components/login'
import {HomeComponent} from './components/home'
import {AuthGuard} from './guards'

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);