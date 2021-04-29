import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SUBCATOGORYPageRoutingModule } from './sub-catogory-routing.module';

import { SUBCATOGORYPage } from './sub-catogory.page';
import { HeaderComponent } from '../Common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SUBCATOGORYPageRoutingModule
  ],
  declarations: [SUBCATOGORYPage,HeaderComponent]
})
export class SUBCATOGORYPageModule {}
