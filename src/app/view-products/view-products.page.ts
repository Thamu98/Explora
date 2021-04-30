import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.page.html',
  styleUrls: ['./view-products.page.scss'],
})
export class ViewProductsPage implements OnInit {
  data: any=[];

  constructor(private http:HttpClient) {
this.http.get("https://explora1.loca.lt/productlist").subscribe(res =>{
  this.data=res;
  console.log(this.data);
})

   }

  ngOnInit() {
  }

}
