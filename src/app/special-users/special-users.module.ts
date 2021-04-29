import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SPECIALUSERSPageRoutingModule } from './special-users-routing.module';

import { SPECIALUSERSPage } from './special-users.page';
import { HeaderComponent } from '../Common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SPECIALUSERSPageRoutingModule
  ],
  declarations: [SPECIALUSERSPage,HeaderComponent]
})
export class SPECIALUSERSPageModule {}
