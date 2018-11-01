import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { NgForm } from '@angular/forms';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { DataService } from '../../common/data.service';
import { ReportModel } from '../../common/model/reportModel';
import { Geolocation } from '@ionic-native/geolocation';

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

  lat: number;
  lng: number;

  report: ReportModel;

  public base64Image: string;
  constructor(
    private geolocation: Geolocation,
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private dataService: DataService,
    private alertCtrl: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportDisasterPage');
  }

  getLocation(){  
    console.log("ng items value is "+ "")
 this.geolocation.getCurrentPosition().then((resp) => {
   this.lat=resp.coords.latitude;
   this.lng=resp.coords.longitude;
    console.log("lat is "+ this.lat)
    console.log("lat is "+ this.lng)
       }).catch((error) => {
     console.log('Error getting location', error);
   });
}
  // for camera
  takePicture() {
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

    if (reportForm.invalid) {
      return;
    }
    this.dataService.saveReport(reportForm.value)
      .subscribe((data) => {
        console.log(data);
        console.log("success");
        let alert = this.alertCtrl.create({
          title: 'Report submitted\nsuccessfully',
          // subTitle: '',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.setRoot(DashboardPage);
      }), (err) => {
        let alert = this.alertCtrl.create({
          title: 'Something went wrong/try again later',
          // subTitle: '10% of battery remaining',
          buttons: ['ok']
        });
        alert.present();
      }
  }
}
