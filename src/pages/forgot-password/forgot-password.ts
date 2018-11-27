import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PasswordPage } from '../password/password';
import { DataService } from '../../common/data.service';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,    public dataService: DataService,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  onResetForm(resetForm: NgForm) {
    // console.log(signupForm);
    if (resetForm.invalid) {
      return;
    }
    // console.log("form is "+JSON.parse(JSON.stringify(resetForm)))
    this.dataService.resetPassword(resetForm.value)
      .subscribe((data) => {
        console.log(data);
        console.log("success");
        let alert = this.alertCtrl.create({
          title: 'Reset Password sent to your email if it is valid and already registered with us!',
          // subTitle: '',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.push(PasswordPage);
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

  // onResetForm(){
    // this.navCtrl.push(PasswordPage);
  // }

}
