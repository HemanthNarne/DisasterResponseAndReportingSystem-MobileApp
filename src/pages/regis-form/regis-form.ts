import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisConfirmPage } from "../regis-confirm/regis-confirm";
import { NgForm } from '@angular/forms';
import { empty } from 'rxjs/Observer';
import { User } from '../../common/model/user';

// for camera
import { Camera, CameraOptions } from '@ionic-native/camera';

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

  user: User;
  pushNotification='Yes';

  @ViewChild('signupSlider') signupSlider: any;
 
  public base64Image: string;
  // The constructor is used for the purpose of validation
  constructor(
    public navCtrl: NavController, 
    private camera: Camera) {}
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisFormPage');
  }

  next(){
    this.signupSlider.slideNext();
}

prev(){
    this.signupSlider.slidePrev();
}



  // onSubmit() method refers to navigation to regis-confirmation page only if the 
  // validation criteria is satisfied.
  onSubmit(regisForm: NgForm) {
    console.log(regisForm.value);
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








