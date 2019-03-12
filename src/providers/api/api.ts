import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const URL = 'http://leave.fiercecom.net/api/'
@Injectable()
export class ApiProvider {

  public access_token;

  constructor(
    public http: HttpClient,
    private storage: Storage
    ) {
    console.log('Hello ApiProvider Provider');
  }

  getToken(){
    return this.storage.get('access_token');
  }

  login(email, password){
    let body = {
      email : email,
      password: password
    }
    return this.http.post(URL + 'auth/login', body);
  }

  me(token){
    console.log(token)
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    // header = header.append('Content-Type','application/json');
    // header = header.append('Accept','application/json');
    // header = header.append('Authorization','Bearer ' + token);
    console.log(header);
    let options = {
      headers: header
    }

    return this.http.get(URL + 'me', options);

  }

  my_roles(token){
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let options = {
      headers: header
    }

    return this.http.get(URL + 'my-roles', options);
  }

  logout(token){
    let header = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    console.log(header);
    console.log(token);

    let options = {
      headers: header
    }

    return this.http.post(URL + 'auth/logout', null, options);
  }

  admin_get_leaverequests(token) {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let options = {
      headers: header
    }

    return this.http.get(URL + 'admin/leave-requests', options);
  }

}
