import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ORDERTRACKINGPage } from './order-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: ORDERTRACKINGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ORDERTRACKINGPageRoutingModule {}
