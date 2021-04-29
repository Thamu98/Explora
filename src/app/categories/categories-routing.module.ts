import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CATEGORIESPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CATEGORIESPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CATEGORIESPageRoutingModule {}
