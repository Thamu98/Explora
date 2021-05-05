import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.page.html',
  styleUrls: ['./view-products.page.scss'],
})
export class ViewProductsPage implements OnInit {
  data: any=[];
  data1: any=[];
  
  offerData: any=[];

  constructor(private http:HttpClient) {
this.http.get("https://explora1.loca.lt/productlist").subscribe(res =>{
  this.data=res;
  console.log(this.data);
})

this.http.get("https://explora1.loca.lt/offers").subscribe(res=>{
  this.offerData=res;
  console.log(this.offerData);
})
  }
filter(search){
  console.log(search);
  this.http.get("https://explora1.loca.lt/productlist").subscribe(res => {
    // console.log(res);
    this.data1 = res;
    // console.log(this.data1);
    this.data = this.data1.filter(res=>{
      return res.offer.indexOf(search)>-1;     
       });
       console.log(this.data1);
  })
  


   }

  ngOnInit() {
   
  }

}
