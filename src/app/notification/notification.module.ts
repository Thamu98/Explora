import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NOTIFICATIONPageRoutingModule } from './notification-routing.module';

import { NOTIFICATIONPage } from './notification.page';
import { HeaderComponent } from '../Common/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NOTIFICATIONPageRoutingModule
  ],
  declarations: [NOTIFICATIONPage,HeaderComponent]
})
export class NOTIFICATIONPageModule {}
