// @author Sreevani Anoohya Tadiboina
//   This page refers to development of registration start form

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisFormPage } from '../regis-form/regis-form';
import { DashboardPage } from '../dashboard/dashboard';

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
  // onStart() deals with the navigation code
  onStart(){
    // When the button is clicked onStart() method is triggered. 
    // push() method is used to navigate from one page to another
    this.navCtrl.push(RegisFormPage);
  }
  onStart1()
  {
    this.navCtrl.setRoot(DashboardPage);
  }
}
