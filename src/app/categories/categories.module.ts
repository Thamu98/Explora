import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CATEGORIESPageRoutingModule } from './categories-routing.module';

import { CATEGORIESPage } from './categories.page';
import { HeaderComponent } from '../Common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CATEGORIESPageRoutingModule
  ],
  declarations: [CATEGORIESPage,HeaderComponent]
})
export class CATEGORIESPageModule {}
