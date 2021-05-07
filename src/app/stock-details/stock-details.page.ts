import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  subArray: any[];
  email: any;

  private file: File;
  img_name: any;

  constructor(private http: HttpClient) { 
    this.http.get("https://explora.loca.lt/categorys").subscribe(res =>{
   
      this.catdata=res;
      console.log(res);
    })
    this.http.get("https://explora.loca.lt/subcategory").subscribe(res =>{
      this.subcatdata=res;
      console.log(this.subcatdata);
    })

    this.http.get("https://explora.loca.lt/productlist").subscribe(res =>{
  this.data=res;
  console.log(this.data);
})

  }

  ngOnInit() {
    this.email=localStorage.getItem("Email");
  }
  select(productcategory){
    this.subArray = this.subcatdata.filter(e=>e.cat_id === productcategory.cat_id);
    console.log(this.subArray);
}


onFileChange(fileChangeEvent) {
  this.file = fileChangeEvent.target.files[0];
}

// async submitForm() {
//   let formData = new FormData();
//   formData.append("image", this.file, this.file.name);

//   this.http.post("http://192.168.1.10:3100/explora/images/", formData).subscribe((response) => {
//     console.log(response);
//     this.img_name = response['name'];
//     console.log(this.img_name);
//   });
// }


  stock(item){
    let formData = new FormData();
  formData.append("image", this.file, this.file.name);

  this.http.post("http://192.168.1.10:3100/explora/images/", formData).subscribe((response) => {
    console.log(response);
    this.img_name = response['name'];
    console.log(this.img_name);
    var stockUrl = 'https://explora.loca.lt/stock';
    let record = {};
    record['product_id'] = item.product_id;
    record['invoice_no'] = this.invoiceNo;
    record['stock_count'] = item.stock + this.stock_count;
    record['invoice_image']=this.img_name;
    record['user_id'] = this.email;
    console.log(record);
    this.http.post(stockUrl,record).subscribe(res=>{
      console.log(res);
    })
  });

    
 
    
    
  }

}
