/**
 * Created by ilyapolyakov on 1/12/17.
 */
import {Injectable} from '@angular/core'
import {Http, Headers, Response, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class ZoneService {
    public token: string;

    localhost: String = 'localhost';
    port: String = '1337';

    private url = 'http://'+this.localhost+':'+this.port;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    // getZones(): Observable<boolean> {
    //     return this.http.get(this.url + '/auth/login', JSON.stringify({username: username, password: password}))
    //         .map((response: Response) => {
    //             console.log(response);
    //             let token = response.json() && response.json().token;
    //             if(token) {
    //                 this.token = token;
    //                 //if we get token from backend - store it to local
    //                 localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
    //
    //                 return true;
    //             } else {
    //                 return false;
    //             }
    //         });
    // }
}