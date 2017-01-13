/**
 * Created by ilyapolyakov on 1/4/17.
 */
import {Injectable} from '@angular/core'
import {Http, Headers, Response, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    localhost: String = 'localhost';
    port: String = '1337';

    private url = 'http://'+this.localhost+':'+this.port;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url + '/auth/login', JSON.stringify({username: username, password: password}), options)
            .map((response: Response) => {
                console.log(response);
                let token = response.json() && response.json().token;
                if(token) {
                    this.token = token;
                    //if we get token from backend - store it to local
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    register(username: string, password: string, email: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = {username: username, password: password, email: email};

        return this.http.post(this.url + '/auth/register', JSON.stringify(body), options)
            .map((response: Response) => {
                console.log(response);
                let token = response.json() && response.json().token;
                if(token) {
                    this.token = token;
                    //if we get token from backend - store it to local
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    return true;
                } else {
                    return false;
                }
            });
    }

}