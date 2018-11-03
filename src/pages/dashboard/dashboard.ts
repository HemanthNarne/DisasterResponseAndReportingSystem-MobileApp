import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportDisasterPage } from '../report-disaster/report-disaster';
import { DataService } from '../../common/data.service';
import { Incident } from '../../common/model/incident';

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
  incidentClicked: string;
  incidents:any
  user:string;
  isLoading: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataService: DataService ) {
  }

  ionViewDidLoad() {
    this.user=this.navParams.get('user')
    this.dataService.getIncidentsList()
      .subscribe((data) => {
        console.log(data)
        this.incidents = data['data'];

        this.isLoading = false;
    });
    console.log('ionViewDidLoad DashboardPage ' +this.user );
  }

  report(item:Incident)
  {
    this.incidentClicked=item.incidentID
    this.navCtrl.push(ReportDisasterPage,{incidentClicked:this.incidentClicked,user:this.user});
  }

}
