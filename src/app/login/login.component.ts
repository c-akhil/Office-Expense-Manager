import { LoginService } from './../login.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form= new FormGroup ({
    email:new FormControl("",[Validators.required,Validators.email]),
   password:new FormControl("",[Validators.required]),
    
  });
  statusMessage:string='';

  constructor(private http:Http,private loginService:LoginService) { 

   }

  ngOnInit() {
  }

  login(email){
    let emp={
    "emailId":this.form.value.email,
      "password":this.form.value.password
      }
   
    console.log(JSON.stringify(emp));
     this.http.post("http://192.168.2.81:8080/OfficeExpenseManager/login/login" ,emp).subscribe(
      response =>{
        console.log(response.json() );
        console.log(response);
        if(response.status==200)
        {
          
          this.loginService.isLogin=true;
          this.loginService.empEmail=this.form.value.email;
          console.log("login success");
        }
        else{
          this.statusMessage="Invalid Password/Email";
        }
    
      }
    )
    
  }

}
