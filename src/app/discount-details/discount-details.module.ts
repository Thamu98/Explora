import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DISCOUNTDETAILSPageRoutingModule } from './discount-details-routing.module';

import { DISCOUNTDETAILSPage } from './discount-details.page';
import { HeaderComponent } from '../Common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DISCOUNTDETAILSPageRoutingModule
  ],
  declarations: [DISCOUNTDETAILSPage,HeaderComponent]
})
export class DISCOUNTDETAILSPageModule {}
