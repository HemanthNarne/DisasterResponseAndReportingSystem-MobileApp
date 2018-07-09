import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisConfirmPage } from "../regis-confirm/regis-confirm";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { empty } from 'rxjs/Observer';

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
  firstName: boolean = false;
  lastName: boolean = false;
  emailId: boolean = false;
  dob: boolean = false;
  phone:boolean=false;
  address1:boolean=false;
  county:boolean=false;
  city:boolean=false;
  state:boolean=false;
  country:boolean=false;
  certification:boolean=false;
  // Image:any;
  

  regisForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.regisForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      EmailID: ['', Validators.compose([Validators.minLength(8), Validators.pattern('[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+'), Validators.required])],
      DOB: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[0-9]+[/]+[0-9]+[/]+[0-9]+'), Validators.required])],
      pnumber: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(12), Validators.required])],
      Address1 : ['', Validators.compose([Validators.minLength(10), Validators.maxLength(60), Validators.required])],
      County : ['', Validators.compose([Validators.minLength(1), Validators.maxLength(30), Validators.required])],
      City : ['', Validators.compose([Validators.minLength(1), Validators.maxLength(30), Validators.required])],
      State : ['', Validators.compose([Validators.minLength(1), Validators.maxLength(30), Validators.required])],
      Country : ['', Validators.compose([Validators.minLength(1), Validators.maxLength(30), Validators.required])],
      License : ['', Validators.compose([Validators.minLength(10), Validators.maxLength(16), Validators.required])]

    });
  }
  @ViewChild('Image') myElement: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisFormPage');
  }

 

  // onSubmit() method refers to navigation to regis-confirmation page only if the 
  // validation criteria is satisfied.
  onSubmit() {
    if (!this.regisForm.controls.firstName.valid || !this.regisForm.controls.lastName.valid ||
      !this.regisForm.controls.EmailID.valid || !this.regisForm.controls.DOB.valid || !this.regisForm.controls.pnumber.valid||
      !this.regisForm.controls.Address1.valid || !this.regisForm.controls.County.valid||
      !this.regisForm.controls.City.valid||!this.regisForm.controls.State.valid||
      !this.regisForm.controls.Country.valid|| !this.regisForm.controls.License.valid) {
      if (!this.regisForm.controls.firstName.valid) {
        this.firstName = true;
      }
      if (!this.regisForm.controls.lastName.valid) {
        this.lastName = true;
      }
      if (!this.regisForm.controls.EmailID.valid) {
        this.emailId = true;
      }
      if (!this.regisForm.controls.DOB.valid) {
        this.dob = true;
      }
      if (!this.regisForm.controls.pnumber.valid) {
        this.phone = true;
      }
      if (!this.regisForm.controls.Address1.valid) {
        this.address1 = true;
      }
      if (!this.regisForm.controls.County.valid) {
        this.county = true;
      }
      if (!this.regisForm.controls.City.valid) {
        this.city = true;
      }
      if (!this.regisForm.controls.State.valid) {
        this.state = true;
      }
      if (!this.regisForm.controls.Country.valid) {
        this.country = true;
      }
      if (!this.regisForm.controls.License.valid) {
        this.certification = true;
      }
    }

    else {
      this.navCtrl.push(RegisConfirmPage);
    }
  }






}
