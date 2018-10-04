import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { NgForm } from '@angular/forms';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { DataService } from '../../common/data.service';
import { ReportModel } from '../../common/model/reportModel';

/**
 * Generated class for the ReportDisasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-disaster',
  templateUrl: 'report-disaster.html',
})
export class ReportDisasterPage {

  report: ReportModel;

  public base64Image: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private dataService: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportDisasterPage');
  }

  // for camera
  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  onSubmit(reportForm: NgForm) {

    // console.log(reportForm.value);
    // console.log("b4" + reportForm.value.location);
    // reportForm.value.location = this.location;
    // console.log("after" + reportForm.value.location);

    if(reportForm.invalid){
      return;
    }
    this.dataService.saveReport(reportForm.value)
      .subscribe((data) => {
        console.log(data);
        console.log("success");
        this.navCtrl.push(DashboardPage);
      });
  }

}
