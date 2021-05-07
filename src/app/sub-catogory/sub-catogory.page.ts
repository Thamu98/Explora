import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-catogory',
  templateUrl: './sub-catogory.page.html',
  styleUrls: ['./sub-catogory.page.scss'],
})
export class SUBCATOGORYPage implements OnInit {
  catdata: any=[];
  subcatdata: any=[];

  constructor(private http: HttpClient) {
    this.http.get("https://explora.loca.lt/categorys").subscribe(res =>{
      console.log(res);
      this.catdata=res;
      console.log(this.catdata)
    })

    this.http.get("https://explor.loca.lt/subcategory").subscribe(res =>{
      console.log(res);
      this.subcatdata=res;
      console.log(this.subcatdata)
    })
   }

  ngOnInit() {
  }
  addsubCategory(Subcategory,Catname,subImage){
    var data={ Subcategory,Catname,subImage}
    var url="https://explora.loca.lt/subcategory"
    this.http.post(url,data).subscribe(res =>{
      console.log(res);
    })
  }
}
