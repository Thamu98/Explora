import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SPECIALUSERSPage } from './special-users.page';

const routes: Routes = [
  {
    path: '',
    component: SPECIALUSERSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SPECIALUSERSPageRoutingModule {}
