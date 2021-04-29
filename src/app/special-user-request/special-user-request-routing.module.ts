import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SPECIALUSERREQUESTPage } from './special-user-request.page';

const routes: Routes = [
  {
    path: '',
    component: SPECIALUSERREQUESTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SPECIALUSERREQUESTPageRoutingModule {}
