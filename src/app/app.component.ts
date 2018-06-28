import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { RegisConfirmPage } from '../pages/regis-confirm/regis-confirm';
import { RegisFormPage } from '../pages/regis-form/regis-form';
import { ReportDisasterPage } from '../pages/report-disaster/report-disaster';
import { SignupPage } from '../pages/signup/signup';
import { StartRegisPage } from '../pages/start-regis/start-regis';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RegisFormPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'dashboard', component: DashboardPage },
      { title: 'login', component: LoginPage },
      { title: 'regisConfirm', component: RegisConfirmPage },
      { title: 'regisForm', component: RegisFormPage },
      { title: 'reportDisaster', component: ReportDisasterPage },
      { title: 'signup', component: SignupPage },
      { title: 'startRegis', component: StartRegisPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
