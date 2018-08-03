import { LoginService } from './../login.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form= new FormGroup ({
    email:new FormControl(),
   password:new FormControl(),
    
  });
  statusMessage:string='';

  constructor(private http:Http,private loginService:LoginService) { 

   }

  ngOnInit() {
  }

  login(email){
    let emp={
    "email":email,
      "password":this.form.value.password
      }
   
    console.log(JSON.stringify(emp));
     this.http.get("http://192.168.2.81:8080/OfficeExpenseManager/login/login?email="+this.form.value.email+"&password="+this.form.value.password  )
    .subscribe(
      response =>{
        // console.log(response.json() );
        if(response.json())
        {
          
          this.loginService.isLogin=true;
          
          console.log("login success");
        }
        else{
          this.statusMessage="Invalid Password/Email";
        }
    
      }

    ) 
  }

}
