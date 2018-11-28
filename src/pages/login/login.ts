import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { StartRegisPage } from '../start-regis/start-regis';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignupPage } from '../signup/signup';
// import { FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../../common/model/user';
import { Login } from '../../common/model/login';
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
  loginID:string
  user: any;
  login:any;
  firstName:string;
  lastName:string;

  // email: string;
  // wrongPassword = false;

  constructor(public navCtrl: NavController, public dataService: DataService, private alertCtrl: AlertController, public navParams: NavParams) {
    // this.wrongPassword = false;
  }

  ionViewDidLoad() {
    this.firstName=this.navParams.get('firstName')
    this.lastName=this.navParams.get('lastName')
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(loginForm: NgForm){
    if(loginForm.invalid){
      return;
    }

    // this.user=    angular.element('#Text1').val();
    this.dataService.login(loginForm.value)
      .subscribe((data) => {        
        this.login=(JSON.stringify(loginForm.value));
        this.user=JSON.parse(this.login)
        console.log(this.user.email);
        console.log(this.firstName);
        console.log(this.lastName);
        let alert = this.alertCtrl.create({
          title: 'Login successful!',
          // subTitle: '10% of battery remaining',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.push(StartRegisPage,{userName:this.user.email,firstName:this.firstName,lastName:this.lastName});
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


