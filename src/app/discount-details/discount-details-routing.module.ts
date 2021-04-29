import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DISCOUNTDETAILSPage } from './discount-details.page';

const routes: Routes = [
  {
    path: '',
    component: DISCOUNTDETAILSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DISCOUNTDETAILSPageRoutingModule {}
