import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NgForm } from '@angular/forms';
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
  userr:any;
  signup:any;

  constructor(
    public navCtrl: NavController,
    public dataService: DataService,
    private alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSignup(signupForm: NgForm) {
    // console.log(signupForm);
    if (signupForm.invalid) {
      return;
    }
    this.dataService.signup(signupForm.value)
      .subscribe((data) => {
        this.signup=(JSON.stringify(signupForm.value));
        this.userr=JSON.parse(this.signup)
        console.log(this.userr.firstName);
        console.log(this.userr.lastName);
        console.log(data);
        console.log("success");
        let alert = this.alertCtrl.create({
          title: 'Thank you for signing up',
          // subTitle: '',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.setRoot(LoginPage,{firstName:this.userr.firstName,lastName:this.userr.lastName});
      }, (err) => {
        let alert = this.alertCtrl.create({
          title: 'User with this email already exists. \n Please try with different email-id!',
          // subTitle: '10% of battery remaining',
          buttons: ['ok']
        });
        alert.present();;
        // console.log(signupForm.value);
      })
  }
}
