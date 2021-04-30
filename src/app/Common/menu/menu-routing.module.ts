import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
  {
    path: 'home',
    loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('../../categories/categories.module').then( m => m.CATEGORIESPageModule)
  },
  {
    path: 'sub-catogory',
    loadChildren: () => import('../../sub-catogory/sub-catogory.module').then( m => m.SUBCATOGORYPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('../../product-details/product-details.module').then( m => m.PRODUCTDETAILSPageModule)
  },
  {
    path: 'stock-details',
    loadChildren: () => import('../../stock-details/stock-details.module').then( m => m.STOCKDETAILSPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('../../notification/notification.module').then( m => m.NOTIFICATIONPageModule)
  },
  {
    path: 'special-user-request',
    loadChildren: () => import('../../special-user-request/special-user-request.module').then( m => m.SPECIALUSERREQUESTPageModule)
  },
  {
    path: 'special-users',
    loadChildren: () => import('../../special-users/special-users.module').then( m => m.SPECIALUSERSPageModule)
  },
  {
    path: 'discount-details',
    loadChildren: () => import('../../discount-details/discount-details.module').then( m => m.DISCOUNTDETAILSPageModule)
  },
  {
    path: 'order-tracking',
    loadChildren: () => import('../../order-tracking/order-tracking.module').then( m => m.ORDERTRACKINGPageModule)
  },
    {
    path: 'view-products',
    loadChildren: () => import('../../view-products/view-products.module').then( m => m.ViewProductsPageModule)
  },

  {
    path: '',
    redirectTo: '/menu/sub-catogory',
    pathMatch: 'full'
  }
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
