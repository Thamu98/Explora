import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PRODUCTDETAILSPageRoutingModule } from './product-details-routing.module';

import { PRODUCTDETAILSPage } from './product-details.page';
import { HeaderComponent } from '../Common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PRODUCTDETAILSPageRoutingModule
  ],
  declarations: [PRODUCTDETAILSPage,HeaderComponent]
})
export class PRODUCTDETAILSPageModule {}
