import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-catogory',
  templateUrl: './sub-catogory.page.html',
  styleUrls: ['./sub-catogory.page.scss'],
})
export class SUBCATOGORYPage implements OnInit {
  catdata: any=[];

  constructor(private http: HttpClient) {
    this.http.get("https://explora1.loca.lt/api/category").subscribe(res =>{
      console.log(res);
      this.catdata=res;
      console.log(this.catdata)
    })
   }

  ngOnInit() {
  }

}
