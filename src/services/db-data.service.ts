import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class DbDataService extends BaseService{
    static TEST_URL = '${environment.url}/tests';


  async getData(query: string): Promise<any> {
    return this.get(DbDataService.TEST_URL, {query : query});
  }
}
