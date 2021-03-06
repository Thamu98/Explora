import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CATEGORIESPage implements OnInit {
  catdata: any=[];

  constructor(private http: HttpClient) {
    this.http.get("https://explora.loca.lt/categorys").subscribe(res =>{
      console.log(res);
      this.catdata=res;
      console.log(this.catdata)
    })
   }

  ngOnInit() {
  }
  addCategory(Category,Image){
    var server={Category,Image}
    var url="https://explora.loca.lt/categorys"
    this.http.post(url,server).subscribe(res =>{
    console.log(res);
    })
  }


}
