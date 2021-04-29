import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { STOCKDETAILSPage } from './stock-details.page';

const routes: Routes = [
  {
    path: '',
    component: STOCKDETAILSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class STOCKDETAILSPageRoutingModule {}
