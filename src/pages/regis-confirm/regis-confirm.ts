import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgProgressService} from "ng2-progressbar";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private varngpService:NgProgressService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisConfirmPage');
  }

  run()
  {
    this.varngpService.start()
    setTimeout(()=>{this.varngpService.done()},2000)
  }

}
