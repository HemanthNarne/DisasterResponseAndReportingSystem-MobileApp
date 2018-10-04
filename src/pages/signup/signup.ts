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
        console.log(data);
        console.log("success");
        let alert = this.alertCtrl.create({
          title: 'Thank you for signing up',
          // subTitle: '',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.push(LoginPage);
      }), (err) => {
        let alert = this.alertCtrl.create({
          title: 'Something went wrong/try again later',
          // subTitle: '10% of battery remaining',
          buttons: ['ok']
        });
        alert.present();;
        // console.log(signupForm.value);
      }
  }
}
