import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StartRegisPage } from '../start-regis/start-regis';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignupPage } from '../signup/signup';
// import { FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../../common/model/user';
import { DataService } from '../../common/data.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User;
  wrongPassword = false;

  constructor(public navCtrl: NavController, public dataService: DataService) {
    this.wrongPassword = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(loginForm: NgForm){
    if(loginForm.invalid){
      return;
    }
    this.dataService.login(loginForm.value)
      .subscribe((data) => {
        console.log(data);
        this.navCtrl.push(StartRegisPage);
      });
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

  forgot(){
    this.navCtrl.push(ForgotPasswordPage);
  }
}


