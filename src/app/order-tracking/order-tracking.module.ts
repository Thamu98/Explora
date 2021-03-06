import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ORDERTRACKINGPageRoutingModule } from './order-tracking-routing.module';

import { ORDERTRACKINGPage } from './order-tracking.page';
import { HeaderComponent } from '../Common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ORDERTRACKINGPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ORDERTRACKINGPage,HeaderComponent]
})
export class ORDERTRACKINGPageModule {}
