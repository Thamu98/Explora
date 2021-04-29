import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { STOCKDETAILSPageRoutingModule } from './stock-details-routing.module';

import { STOCKDETAILSPage } from './stock-details.page';
import { HeaderComponent } from '../Common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    STOCKDETAILSPageRoutingModule
  ],
  declarations: [STOCKDETAILSPage,HeaderComponent]
})
export class STOCKDETAILSPageModule {}
