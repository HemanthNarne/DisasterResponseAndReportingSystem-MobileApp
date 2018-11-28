import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { RegisConfirmPage } from "../regis-confirm/regis-confirm";
import { NgForm } from '@angular/forms';
import { User } from '../../common/model/user';

// for camera
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DataService } from '../../common/data.service';

/**
 * Generated class for the RegisFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * @author Sreevani Anoohya Tadiboina
  This page refers to development of registration form

 */

@IonicPage()
@Component({
  selector: 'page-regis-form',
  templateUrl: 'regis-form.html',
})
export class RegisFormPage {

  user: string;
  selectedFile : File
  pushNotification = 'Yes';
  firstName:string;
  lastName:string;

  @ViewChild('signupSlider') signupSlider: any;

  public base64Image: string;
  // The constructor is used for the purpose of validation
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private dataService: DataService,
    private alertCtrl: AlertController) { }


  ionViewDidLoad() {
    this.user=this.navParams.get('user');
    this.firstName=this.navParams.get('firstName');
    this.lastName=this.navParams.get('lastName');
    console.log('ionViewDidLoad RegisFormPage'+this.firstName+this.lastName);
  }

  next() {
    this.signupSlider.slideNext();
  }

  prev() {
    this.signupSlider.slidePrev();
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }


  // onSubmit() method refers to navigation to regis-confirmation page only if the
  // validation criteria is satisfied.
  onSubmit(regisForm: NgForm) {
    if (regisForm.invalid) {
      return;
    }
    console.log("regisFormobject is "+regisForm.value.limitations)
    let input = new FormData();
    // input=regisForm.value
    // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
    input.append('files', this.selectedFile);
    input.append('formData', JSON.stringify(regisForm.value));
  
    this.dataService.saveApplicant(input)
      .subscribe((data) => {
        console.log(data);
        console.log("success");
        let alert = this.alertCtrl.create({
          title: 'Your Application is \n submitted successfully',
          // subTitle: '10% of battery remaining',
          buttons: ['ok']
        });
        alert.present();
        this.navCtrl.push(RegisConfirmPage,{user:this.user});
      }), (err) => {
        let alert = this.alertCtrl.create({
          title: 'Something went wrong/try again later',
          // subTitle: '10% of battery remaining',
          buttons: ['ok']
        });
        alert.present();
      }
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
  }
