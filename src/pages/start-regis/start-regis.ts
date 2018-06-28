import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisFormPage } from '../regis-form/regis-form';

/**
 * Generated class for the StartRegisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start-regis',
  templateUrl: 'start-regis.html',
})
export class StartRegisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartRegisPage');
  }
  onStart(){
    this.navCtrl.push(RegisFormPage);
  }
}
