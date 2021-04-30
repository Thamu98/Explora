import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class PRODUCTDETAILSPage implements OnInit {
  catdata: any=[];
  subcatdata: any=[];

  constructor(private http: HttpClient) {
    this.http.get("https://explora1.loca.lt/api/category").subscribe(res =>{
      // console.log(res);
      this.catdata=res;
      console.log(res);
    })
    this.http.get("https://explora1.loca.lt/api/subcategory").subscribe(res =>{
      this.subcatdata=res;
      console.log(this.subcatdata);
    })
   }

  ngOnInit() {

  }

}
