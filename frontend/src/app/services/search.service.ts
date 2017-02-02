/**
 * Created by ilyapolyakov on 2/2/17.
 */
import {Injectable} from '@angular/core'
import {Subject} from 'rxjs'

@Injectable()
export class SearchService {

    public searchText: Subject<string>;

    constructor() {
        this.searchText = new Subject<string>();
    }
}