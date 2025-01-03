import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  URL = 'https://tasks-f373e-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  get(path: string) {
    return this.http.get(this.URL + path + '.json')
  }

  getByParam(param: any, path: string) {
    return this.http.get(this.URL + path + '.json', param)
  }

  post(params: any, path: any) {
    return this.http.post(this.URL + path + '.json', params)
  }
  delete(id: any, path: any) {
    return this.http.delete(`${this.URL}${path}/${id}.json`)
  }
}
