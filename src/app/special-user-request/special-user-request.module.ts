import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SPECIALUSERREQUESTPageRoutingModule } from './special-user-request-routing.module';

import { SPECIALUSERREQUESTPage } from './special-user-request.page';
import { HeaderComponent } from '../Common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SPECIALUSERREQUESTPageRoutingModule
  ],
  declarations: [SPECIALUSERREQUESTPage,HeaderComponent]
})
export class SPECIALUSERREQUESTPageModule {}
