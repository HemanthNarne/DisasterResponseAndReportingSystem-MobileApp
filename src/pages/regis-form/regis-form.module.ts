import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisFormPage } from './regis-form';

@NgModule({
  declarations: [
    RegisFormPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisFormPage),
  ],
})
export class RegisFormPageModule {}
