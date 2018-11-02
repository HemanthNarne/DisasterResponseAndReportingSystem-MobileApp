import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
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
  // wrongPassword = false;

  constructor(public navCtrl: NavController, public dataService: DataService, private alertCtrl: AlertController) {
    // this.wrongPassword = false;
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
        console.log("logged in data is "+data.toString);
        // console.log(data.body.)
        let alert = this.alertCtrl.create({
          title: 'Login successfully',
          // subTitle: '10% of battery remaining',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.push(StartRegisPage);
      },(err)=> {
        let alert = this.alertCtrl.create({
          title: 'Incorrect email/password',
          // subTitle: '10% of battery remaining',
          buttons: ['ok']
        });
        alert.present();
        // alert("Incorrect email/password");
        // console.log("error");
      });
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

  forgot(){
    this.navCtrl.push(ForgotPasswordPage);
  }
}


