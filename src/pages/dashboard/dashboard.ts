import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportDisasterPage } from '../report-disaster/report-disaster';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    window.alert("There is a flood disaster at South of Mozingo Lake, Polk Township, MO 64468 \n Do you want to accept this EOC request and visit the location?"
  )
    console.log('ionViewDidLoad DashboardPage');
  }

  report()
  {
    this.navCtrl.push(ReportDisasterPage);
  }

}
