import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the RegisConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regis-confirm',
  templateUrl: 'regis-confirm.html',
})
export class RegisConfirmPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisConfirmPage');
    // this.navCtrl.push(DashboardPage);
  }

  Dashboardrun1(){
    window.alert("There is a flood disaster at South of Mozingo Lake, Polk Township, MO 64468 \n Do you want to accept this EOC request and visit the location?")
  this.navCtrl.setRoot(DashboardPage);
  }


  // run()
  // {
  //   this.varngpService.start()
  //   setTimeout(()=>{this.varngpService.done()},2000)
  // }

}
