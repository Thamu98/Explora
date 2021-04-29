import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SUBCATOGORYPage } from './sub-catogory.page';

const routes: Routes = [
  {
    path: '',
    component: SUBCATOGORYPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SUBCATOGORYPageRoutingModule {}
