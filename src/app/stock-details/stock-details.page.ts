import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.page.html',
  styleUrls: ['./stock-details.page.scss'],
})
export class STOCKDETAILSPage implements OnInit {
  catdata: any=[];
  subcatdata: any=[];
  data: any=[];
  cat:any;
  stock_count:number;
  invoiceNo:number;

  constructor(private http: HttpClient) { 
    this.http.get("https://explora1.loca.lt/categorys").subscribe(res =>{
      // console.log(res);
      this.catdata=res;
      console.log(res);
    })
    this.http.get("https://explora1.loca.lt/subcategory").subscribe(res =>{
      this.subcatdata=res;
      console.log(this.subcatdata);
    })

    this.http.get("https://explora1.loca.lt/productlist").subscribe(res =>{
  this.data=res;
  console.log(this.data);
})
// console.log(this.cat);
  }

  ngOnInit() {
  }
  stock(item){
    var stock = 'https://explora1.loca.lt/stock';
    let record = {};
    record['product_id'] = item.product_id;
    record['invoice_no'] = this.invoiceNo;
    record['stock_count'] = item.stock + this.stock_count;
    record['user_id'] = 'admin@gmail.com';
    console.log(record);
    this.http.put<any>(stock,record).subscribe(res=>{
      console.log(res);
    })
  }

}
