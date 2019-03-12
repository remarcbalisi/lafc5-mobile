import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalvarsProvider {

  public auth_user : any;
  constructor(public http: HttpClient) {
    console.log('Hello GlobalvarsProvider Provider');
  }

  setAuthUser(value) {
    this.auth_user = value;
  }

}
