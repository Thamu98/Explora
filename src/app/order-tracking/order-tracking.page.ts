import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.page.html',
  styleUrls: ['./order-tracking.page.scss'],
})
export class ORDERTRACKINGPage implements OnInit {
  imgUrl: any;
  detail: any=[];
  base_url: any ="http://192.168.1.10:3100/explora/images/";

  constructor( private httpClient: HttpClient) { 

    this.httpClient.get('https://explora.loca.lt/stock').subscribe(res=>{
     console.log(res);
     this.detail=res;
      for(let i=0;i<this.detail.length;i++){
        // console.log(res[i]['invoice_image']);
        this.imgUrl=(res[i]['invoice_image']);
        console.log(this.imgUrl);
      }
      
      console.log(this.imgUrl)
 
      // for(let i=0;i<invoice_image.length;)
      // this.imgUrl=res['invoice_image'];
      // console.log(this.imgUrl);
    })
    // this.httpClient.get('http://192.168.1.10:3100/explora/images/+this.imgUrl[i]').subscribe(result=>{
    //   console.log(result);
    //   this
    // })
  }


  ngOnInit() {

  }
  







}
