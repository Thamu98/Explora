import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class PRODUCTDETAILSPage implements OnInit {
  catdata: any = [];
  subcatdata: any = [];
  offerData: any = [];
  catname: any;
  items: any;
  catId: any;
 
  sub: any = [];
  subArray: any[];
  data = {};


  constructor(private http: HttpClient) {
    this.http.get("https://explora.loca.lt/categorys").subscribe(res => {
      // console.log(res);
      this.catdata = res;
      console.log(res);
    })
    this.http.get("https://explora.loca.lt/subcategory").subscribe(res => {
      this.subcatdata = res;
      console.log(this.subcatdata);
     
    })
    this.http.get("https://explora.loca.lt/offers").subscribe(res => {
      this.offerData = res;
      console.log(this.offerData);
    })

  }
  ngOnInit() {
  }
  select(productcategory) {
    this.subArray = this.subcatdata.filter(e => e.cat_id === productcategory.cat_id);
    console.log(this.subArray);
  }
  addProduct(productcategory, productsubcategory, productname, subcategoryid, description, expiredate, brand, mrp, normalprice, specialprice, offer, image, stock, rating, howtouse, packagecontent) {
    var data = { productcategory, productsubcategory, productname, subcategoryid, description, expiredate, brand, mrp, normalprice, specialprice, offer, image, stock, rating, howtouse, packagecontent }
    var url = "https://explora.loca.lt/productlist"
    this.http.post(url, data).subscribe(res => {
      console.log(res);
    })
  }

}
