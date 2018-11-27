import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { User } from './model/user';

@Injectable()
export class DataService {

  // private users: User[] = [];
  constructor(private http: HttpClient) { }

  signup(signupData) {
    return this.http.post("https://drrs.herokuapp.com/signup", signupData);
    // return true;
  }

  updatePassword(tempAndNewPWD) {
    return this.http.get("http://localhost:3000/updatePassword/"+ tempAndNewPWD.tempPassword+"/"+tempAndNewPWD.newPassword);
    // return this.http.post("https://drrs.herokuapp.com/updatePassword", tempAndNewPWD);
    // return true;
  }

  resetPassword(data) {
    return this.http.get("http://localhost:3000/resetPassword/"+data.email);
    // return this.http.post("https://drrs.herokuapp.com/resetPassword", resetEmail);
    // return true;
  }

  login(loginData){
    return this.http.post("https://drrs.herokuapp.com/signin", loginData);
  }

  saveApplicant(regisFormData){
    // return this.http.post("http://localhost:3000/saveApplicant", regisFormData);
    return this.http.post("https://drrs.herokuapp.com/saveApplicant", regisFormData);
  }

  saveReport(reportFormData){
    // return this.http.post("https://drrs.herokuapp.com/saveReport", reportFormData);
    return this.http.post("http://localhost:3000/saveReport", reportFormData);
  }

  getIncidentsList(){
    return this.http.get("https://drrs.herokuapp.com/getIncidentsList");
  }

}
