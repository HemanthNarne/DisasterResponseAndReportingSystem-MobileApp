import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { User } from './model/user';

@Injectable()
export class DataService {

  // private users: User[] = [];
  constructor(private http: HttpClient) { }

  signup(signup) {
    return this.http.post("https://drrs.herokuapp.com/signup", signup);
    // return true;
  }
}
