import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StartRegisPage } from '../start-regis/start-regis';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignupPage } from '../signup/signup';
// import { FormGroup, Validators } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  emailId:boolean=false;
  password:boolean=false;

  loginForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      EmailID: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+'), Validators.required])],
      Password:['',Validators.compose([Validators.minLength(8), Validators.required])]
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    //in future you need to connect Api connections
    if (!this.loginForm.controls.EmailID.valid || !this.loginForm.controls.Password.valid) 
      {
      if (!this.loginForm.controls.EmailID.valid) {
        this.emailId = true;
      }

      else if(this.loginForm.controls.EmailID.valid || (this.loginForm.controls.EmailID.touched || this.loginForm.controls.EmailID.dirty))
      {
        if (this.loginForm.controls.EmailID.valid && (this.loginForm.controls.EmailID.touched || this.loginForm.controls.EmailID.dirty)) {
          this.emailId = false;
        }

      }
      if (!this.loginForm.controls.Password.valid) {
        this.password = true;
      }

      else if(this.loginForm.controls.Password.valid || (this.loginForm.controls.Password.touched || this.loginForm.controls.Password.dirty))
    {
      if(this.loginForm.controls.Password.valid && (this.loginForm.controls.Password.touched || this.loginForm.controls.Password.dirty))
      {
        this.password=false;
      }

    } 
  }
    else
    {
      this.navCtrl.push(StartRegisPage);
    }
    
  }


  signup(){
    this.navCtrl.push(SignupPage);
  }
  
  forgot(){
    this.navCtrl.push(ForgotPasswordPage);
  }

}


