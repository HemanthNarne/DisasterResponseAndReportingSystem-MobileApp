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
  phone: boolean = false;
  address1: boolean = false;
  county: boolean = false;
  city: boolean = false;
  state: boolean = false;
  country: boolean = false;
  certification: boolean = false;
  // Image:any;


  regisForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.regisForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      EmailID: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+'), Validators.required])],
      DOB: ['', Validators.compose([Validators.pattern('[0-9]+[/]+[0-9]+[/]+[0-9]+'), Validators.required])],
      pnumber: ['', Validators.compose([Validators.minLength(10), Validators.required])],
      Address1: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(60), Validators.required])],
      County: ['', Validators.compose([Validators.required])],
      City: ['', Validators.compose([Validators.required])],
      State: ['', Validators.compose([Validators.required])],
      Country: ['', Validators.compose([Validators.required])],
      License: ['', Validators.compose([Validators.maxLength(16), Validators.required])]

    });
  }
  @ViewChild('Image') myElement: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisFormPage');
  }



  // onSubmit() method refers to navigation to regis-confirmation page only if the 
  // validation criteria is satisfied.
  onSubmit() {
    // If condition checks for whether all the fields are not correctly validated  
    if (!this.regisForm.controls.firstName.valid || !this.regisForm.controls.lastName.valid ||
      !this.regisForm.controls.EmailID.valid || !this.regisForm.controls.DOB.valid || !this.regisForm.controls.pnumber.valid ||
      !this.regisForm.controls.Address1.valid || !this.regisForm.controls.County.valid ||
      !this.regisForm.controls.City.valid || !this.regisForm.controls.State.valid ||
      !this.regisForm.controls.Country.valid || !this.regisForm.controls.License.valid) {
      if (!this.regisForm.controls.firstName.valid) {
        this.firstName = true;
      }

      else if(this.regisForm.controls.firstName.valid || (this.regisForm.controls.firstName.touched || this.regisForm.controls.firstName.dirty))
      {
        if (this.regisForm.controls.firstName.valid && (this.regisForm.controls.firstName.touched || this.regisForm.controls.firstName.dirty)) {
          this.firstName = false;
        }

      }
      if (!this.regisForm.controls.lastName.valid) {
        this.lastName = true;
      }

      else if(this.regisForm.controls.lastName.valid || (this.regisForm.controls.lastName.touched || this.regisForm.controls.lastName.dirty))
    {
      if(this.regisForm.controls.lastName.valid && (this.regisForm.controls.lastName.touched || this.regisForm.controls.lastName.dirty))
      {
        this.lastName=false;
      }

    } 

      if (!this.regisForm.controls.EmailID.valid) {
        this.emailId = true;
      }

      else if(this.regisForm.controls.EmailID.valid || (this.regisForm.controls.EmailID.touched || this.regisForm.controls.EmailID.dirty))
    {
      if(this.regisForm.controls.EmailID.valid && (this.regisForm.controls.EmailID.touched || this.regisForm.controls.EmailID.dirty))
      {
        this.emailId=false;
      }

    } 

      if (!this.regisForm.controls.DOB.valid) {
        this.dob = true;
      }

      else if(this.regisForm.controls.DOB.valid || (this.regisForm.controls.DOB.touched || this.regisForm.controls.DOB.dirty))
    {
      if(this.regisForm.controls.DOB.valid && (this.regisForm.controls.DOB.touched || this.regisForm.controls.DOB.dirty))
      {
        this.dob=false;
      }

    } 

      if (!this.regisForm.controls.pnumber.valid) {
        this.phone = true;
      }

      else if(this.regisForm.controls.pnumber.valid || (this.regisForm.controls.pnumber.touched || this.regisForm.controls.pnumber.dirty))
    {
      if(this.regisForm.controls.pnumber.valid && (this.regisForm.controls.pnumber.touched || this.regisForm.controls.pnumber.dirty))
      {
        this.phone=false;
      }

    } 
      if (!this.regisForm.controls.Address1.valid) {
        this.address1 = true;
      }

      else if(this.regisForm.controls.Address1.valid || (this.regisForm.controls.Address1.touched || this.regisForm.controls.Address1.dirty))
    {
      if(this.regisForm.controls.Address1.valid && (this.regisForm.controls.Address1.touched || this.regisForm.controls.Address1.dirty))
      {
        this.address1=false;
      }

    } 
      if (!this.regisForm.controls.County.valid) {
        this.county = true;
      }

      else if(this.regisForm.controls.County.valid || (this.regisForm.controls.County.touched || this.regisForm.controls.County.dirty))
    {
      if(this.regisForm.controls.County.valid && (this.regisForm.controls.County.touched || this.regisForm.controls.County.dirty))
      {
        this.county=false;
      }

    } 
      if (!this.regisForm.controls.City.valid) {
        this.city = true;
      }

      else if(this.regisForm.controls.City.valid || (this.regisForm.controls.City.touched || this.regisForm.controls.City.dirty))
    {
      if(this.regisForm.controls.City.valid && (this.regisForm.controls.City.touched || this.regisForm.controls.City.dirty))
      {
        this.city=false;
      }

    } 
      if (!this.regisForm.controls.State.valid) {
        this.state = true;
      }

      else if(this.regisForm.controls.State.valid || (this.regisForm.controls.State.touched || this.regisForm.controls.State.dirty))
    {
      if(this.regisForm.controls.State.valid && (this.regisForm.controls.State.touched || this.regisForm.controls.State.dirty))
      {
        this.state=false;
      }

    } 
      if (!this.regisForm.controls.Country.valid) {
        this.country = true;
      }

      else if(this.regisForm.controls.Country.valid || (this.regisForm.controls.Country.touched || this.regisForm.controls.Country.dirty))
    {
      if(this.regisForm.controls.Country.valid && (this.regisForm.controls.Country.touched || this.regisForm.controls.Country.dirty))
      {
        this.country=false;
      }

    } 


      if (!this.regisForm.controls.License.valid) {
        this.certification = true;
      }

      else if(this.regisForm.controls.License.valid || (this.regisForm.controls.License.touched || this.regisForm.controls.License.dirty))
    {
      if(this.regisForm.controls.License.valid && (this.regisForm.controls.License.touched || this.regisForm.controls.License.dirty))
      {
        this.certification=false;
      }

    } 
    }
    else {
      if((this.regisForm.controls.firstName.valid || (this.regisForm.controls.firstName.touched || this.regisForm.controls.firstName.dirty)) &&
      (this.regisForm.controls.lastName.valid || (this.regisForm.controls.lastName.touched || this.regisForm.controls.lastName.dirty)) &&
      (this.regisForm.controls.EmailID.valid || (this.regisForm.controls.EmailID.touched || this.regisForm.controls.EmailID.dirty)) &&
      (this.regisForm.controls.DOB.valid || (this.regisForm.controls.DOB.touched || this.regisForm.controls.DOB.dirty)) &&
      (this.regisForm.controls.pnumber.valid || (this.regisForm.controls.pnumber.touched || this.regisForm.controls.pnumber.dirty)) &&
      (this.regisForm.controls.Address1.valid || (this.regisForm.controls.Address1.touched || this.regisForm.controls.Address1.dirty)) &&
      (this.regisForm.controls.County.valid || (this.regisForm.controls.County.touched || this.regisForm.controls.County.dirty)) &&
      (this.regisForm.controls.City.valid || (this.regisForm.controls.City.touched || this.regisForm.controls.City.dirty)) &&
      (this.regisForm.controls.State.valid || (this.regisForm.controls.State.touched || this.regisForm.controls.State.dirty)) &&
      (this.regisForm.controls.Country.valid || (this.regisForm.controls.Country.touched || this.regisForm.controls.Country.dirty)) &&
      (this.regisForm.controls.License.valid || (this.regisForm.controls.License.touched || this.regisForm.controls.License.dirty)))
      {

      this.firstName=false;
      this.lastName=false;
      this.emailId=false;
      this.dob=false;
      this.phone=false;
      this.address1=false;
      this.county=false;
      this.city=false;
      this.state=false;
      this.country=false;
      this.certification=false;
      this.navCtrl.push(RegisConfirmPage);
      }
      else{
      this.navCtrl.push(RegisConfirmPage);
      }


    
      
    }
  }
}








