import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// for camera
import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { StartRegisPage } from '../pages/start-regis/start-regis';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { RegisFormPage } from "../pages/regis-form/regis-form";
import { RegisConfirmPage } from "../pages/regis-confirm/regis-confirm";
import { NgProgressModule } from "ng2-progressbar";
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ReportDisasterPage } from '../pages/report-disaster/report-disaster';
import { DataService } from '../common/data.service';
import { Push } from '@ionic-native/push';
import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    StartRegisPage,
    ForgotPasswordPage,
    RegisFormPage,
    RegisConfirmPage,
    DashboardPage,
    ReportDisasterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgProgressModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    StartRegisPage,
    ForgotPasswordPage,
    RegisFormPage,
    RegisConfirmPage,
    DashboardPage,
    ReportDisasterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}
