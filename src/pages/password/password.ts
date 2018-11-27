import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NgForm } from '@angular/forms';
import { DataService } from '../../common/data.service';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataService,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }
  onPassword(PasswordForm){
    // this.navCtrl.push(LoginPage);
    if (PasswordForm.invalid) {
      return;
    }    this.dataService.updatePassword(PasswordForm.value)
    .subscribe((data) => {
      console.log(data);
      console.log("success");
      let alert = this.alertCtrl.create({
        title: 'Password reset successful!',
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
      alert.present();
      // console.log(signupForm.value);
    }
}



  


}
