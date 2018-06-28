import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportDisasterPage } from './report-disaster';

@NgModule({
  declarations: [
    ReportDisasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportDisasterPage),
  ],
})
export class ReportDisasterPageModule {}
