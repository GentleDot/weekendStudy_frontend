import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DbDataService {

  constructor(private http: HttpClient) {
  }

  async getData(query: string): Promise<any> {
    return this.http.get<any[]>('http://localhost:9090/tests?query=' + query).toPromise().then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  }
}
