import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpsPageRoutingModule } from './gps-routing.module';

import { GpsPage } from './gps.page';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpsPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: GpsPage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABDCGSfhIu5G8GZg2doNOPmZUBFpLlPUU', 
      libraries: ['places']
    }) ],


  declarations: [GpsPage]
})
export class GpsPageModule {}
