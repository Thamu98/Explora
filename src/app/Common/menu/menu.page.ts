import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  home1: string;
  categories1: string;
  subcatogorty1: string;
  productdetails1: string;
  stockdetails1: string;
  notification1: string;
  specialuserreq1: string;
  specialuser1: string;
  discount1: string;
  ordertracking1: string;

  constructor(public navCtrl:NavController,public popoverController: PopoverController) { }

  ngOnInit() {
  }
  home(){
    this.home1="HOME"
    localStorage.setItem('name',JSON.stringify(this.home1));
    this.navCtrl.navigateForward('/menu/home');
  }
  categories(){
    this.categories1="CATEGORIES"
    localStorage.setItem('name',JSON.stringify(this.categories1));
    this.navCtrl.navigateForward('/menu/categories');
  }
  subcatogorty(){
    this.subcatogorty1="SUB-CATEGORIES"
    localStorage.setItem('name',JSON.stringify(this.subcatogorty1));
    this.navCtrl.navigateForward('/menu/sub-catogory');
  }
  productdetails(){
    this.productdetails1="PRODUCT DETAILS"
    localStorage.setItem('name',JSON.stringify(this.productdetails1));
    this.navCtrl.navigateForward('/menu/product-details');
  }
  stockdetails(){
    this.stockdetails1="STOCK DETAILS"
    localStorage.setItem('name',JSON.stringify(this.stockdetails1));
    this.navCtrl.navigateForward('/menu/stock-details');
  }
  notification(){
    this.notification1="NOTIFICATION"
    localStorage.setItem('name',JSON.stringify(this.notification1));
    this.navCtrl.navigateForward('/menu/notification');
  }
  specialuserreq(){
    this.specialuserreq1="SPECIAL USER REQUEST"
    localStorage.setItem('name',JSON.stringify(this.specialuserreq1));
    this.navCtrl.navigateForward('/menu/special-user-request');
  }
  specialuser(){
    this.specialuser1="SPECIAL USERS"
    localStorage.setItem('name',JSON.stringify(this.specialuser1));
    this.navCtrl.navigateForward('/menu/special-users')
  }
  discount(){
    this.discount1="DISCOUNT DETAILS"
    localStorage.setItem('name',JSON.stringify(this.discount1));
    this.navCtrl.navigateForward('/menu/discount-details');
  }
  ordertracking(){
    this.ordertracking1="ORDER TRACKING"
    localStorage.setItem('name',JSON.stringify(this.ordertracking1));
    this.navCtrl.navigateForward('/menu/order-tracking');
  }
  logout(){
    this.navCtrl.navigateBack('login-page');
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfileComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
