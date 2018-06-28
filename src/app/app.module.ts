import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { StartRegisPage } from '../pages/start-regis/start-regis';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { RegisFormPage } from "../pages/regis-form/regis-form";
import { RegisConfirmPage } from "../pages/regis-confirm/regis-confirm";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    StartRegisPage,
    ForgotPasswordPage,
    RegisFormPage,
    RegisConfirmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    RegisConfirmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
