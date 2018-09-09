import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DataService } from '../../common/data.service';
import { User } from '../../common/model/user';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user: User;

  constructor(public navCtrl: NavController, public dataService: DataService ) {}

  onSignup(signupForm: NgForm) {
    // console.log(signupForm);
    if(signupForm.invalid){
      return;
    }
    this.dataService.signup(signupForm.value)
      .subscribe((data) => {
        console.log(data);
        console.log("success");
        this.navCtrl.push(LoginPage);
      });
    // console.log(signupForm.value);
  }
}
