import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  // {
  //   path: 'categories',
  //   loadChildren: () => import('./categories/categories.module').then( m => m.CATEGORIESPageModule)
  // },
  // {
  //   path: 'sub-catogory',
  //   loadChildren: () => import('./sub-catogory/sub-catogory.module').then( m => m.SUBCATOGORYPageModule)
  // },
  // {
  //   path: 'product-details',
  //   loadChildren: () => import('./product-details/product-details.module').then( m => m.PRODUCTDETAILSPageModule)
  // },
  // {
  //   path: 'stock-details',
  //   loadChildren: () => import('./stock-details/stock-details.module').then( m => m.STOCKDETAILSPageModule)
  // },
  // {
  //   path: 'notification',
  //   loadChildren: () => import('./notification/notification.module').then( m => m.NOTIFICATIONPageModule)
  // },
  // {
  //   path: 'special-user-request',
  //   loadChildren: () => import('./special-user-request/special-user-request.module').then( m => m.SPECIALUSERREQUESTPageModule)
  // },
  // {
  //   path: 'special-users',
  //   loadChildren: () => import('./special-users/special-users.module').then( m => m.SPECIALUSERSPageModule)
  // },
  // {
  //   path: 'discount-details',
  //   loadChildren: () => import('./discount-details/discount-details.module').then( m => m.DISCOUNTDETAILSPageModule)
  // },
  // {
  //   path: 'order-tracking',
  //   loadChildren: () => import('./order-tracking/order-tracking.module').then( m => m.ORDERTRACKINGPageModule)
  // },
  // {
  //   path: 'login-page',
  //   loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  // },
  {
    path: 'menu',
    loadChildren: () => import('./Common/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  // {
  //   path: 'view-products',
  //   loadChildren: () => import('./view-products/view-products.module').then( m => m.ViewProductsPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
