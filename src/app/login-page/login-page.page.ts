import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  email: string;
  pass: string;
  name: string;

  constructor(public navCtrl:NavController,public alertController:AlertController, private http: HttpClient) { }

  ngOnInit() {

  }
  async store(){
  

    if(this.email=="Admin@gmail.com" && this.pass=="Admin@123"){
    
      this.navCtrl.navigateForward('/menu/home');
      localStorage.setItem('Email',this.email);
      this.email="";
      this.pass="";
    }
    else{

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Invalid User',
        message: 'Username & Password Wrong.',
        buttons: ['OK']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }

    
  }
//     store(email , pass) {
//       var db = { email,pass }
//       var url = "http://192.168.1.23:3300/auth";
//       this.http.post(url, db).subscribe(res => {
//         console.log(res)
//         if(res['status']==true){
//           this.navCtrl.navigateForward('/menu/home');
//         }
// else{
//   console.log("wrong")
// }
       
//       })
// }
}
