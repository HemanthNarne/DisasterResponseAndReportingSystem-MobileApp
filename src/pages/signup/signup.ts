import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  firstName: boolean = false;
  lastName: boolean = false;
  emailId: boolean = false;
  password:boolean=false;
  confirmpassword:boolean=false;
  signupForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      EmailID: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+'), Validators.required])],
      Password:['',Validators.compose([Validators.minLength(8), Validators.required])],
      ConfirmPassword:['',Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    //in future you need to connect Api connections
    if (!this.signupForm.controls.firstName.valid || !this.signupForm.controls.lastName.valid ||
      !this.signupForm.controls.EmailID.valid || !this.signupForm.controls.Password.valid || !this.signupForm.controls.ConfirmPassword.valid){
      if (!this.signupForm.controls.firstName.valid) {
        this.firstName = true;
      }

      else if(this.signupForm.controls.firstName.valid || (this.signupForm.controls.firstName.touched || this.signupForm.controls.firstName.dirty))
      {
        if (this.signupForm.controls.firstName.valid && (this.signupForm.controls.firstName.touched || this.signupForm.controls.firstName.dirty)) {
          this.firstName = false;
        }

      }
      if (!this.signupForm.controls.lastName.valid) {
        this.lastName = true;
      }

      else if(this.signupForm.controls.lastName.valid || (this.signupForm.controls.lastName.touched || this.signupForm.controls.lastName.dirty))
    {
      if(this.signupForm.controls.lastName.valid && (this.signupForm.controls.lastName.touched || this.signupForm.controls.lastName.dirty))
      {
        this.lastName=false;
      }

    } 

      if (!this.signupForm.controls.EmailID.valid) {
        this.emailId = true;
      }

      else if(this.signupForm.controls.EmailID.valid || (this.signupForm.controls.EmailID.touched || this.signupForm.controls.EmailID.dirty))
    {
      if(this.signupForm.controls.EmailID.valid && (this.signupForm.controls.EmailID.touched || this.signupForm.controls.EmailID.dirty))
      {
        this.emailId=false;
      }

    } 

    if (!this.signupForm.controls.Password.valid) {
      this.password = true;
    }

    else if(this.signupForm.controls.Password.valid || (this.signupForm.controls.Password.touched || this.signupForm.controls.Password.dirty))
  {
    if(this.signupForm.controls.Password.valid && (this.signupForm.controls.Password.touched || this.signupForm.controls.Password.dirty))
    {
      this.password=false;
    }

  } 

  if (!this.signupForm.controls.ConfirmPassword.valid) {
    this.confirmpassword = true;
  }

  else if(this.signupForm.controls.ConfirmPassword.valid || (this.signupForm.controls.ConfirmPassword.touched || this.signupForm.controls.ConfirmPassword.dirty))
{
  if(this.signupForm.controls.ConfirmPassword.valid && (this.signupForm.controls.ConfirmPassword.touched || this.signupForm.controls.ConfirmPassword.dirty))
  {
    this.confirmpassword=false;
  }

} 
    

  } 

  else
  {
    this.navCtrl.push(LoginPage);
  }
  
}
}