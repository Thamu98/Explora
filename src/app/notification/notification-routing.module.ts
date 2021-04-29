import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NOTIFICATIONPage } from './notification.page';

const routes: Routes = [
  {
    path: '',
    component: NOTIFICATIONPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NOTIFICATIONPageRoutingModule {}
