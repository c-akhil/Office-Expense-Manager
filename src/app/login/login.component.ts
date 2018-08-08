import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidation } from '../CustomValidation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form= new FormGroup ({
    email: new FormControl("",[Validators.required,Validators.email]),
   password:new FormControl("",[Validators.required]),
    
  });
  statusMessage:string='';

  constructor(private http:Http,private loginService:LoginService,private router:Router) { 

   }

  ngOnInit() {

    this.loginService.isLogin=false ;
    this.loginService.empEmail='';
    this.loginService.empId='';
    this.loginService.graphCollection=[];
    this.loginService.graphDates=[];
    this.loginService.graphExpense=[];

    
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
        if(response.json().statusMessage=="Login Success")
        {
          
          this.loginService.isLogin=true;
          this.loginService.empEmail=this.form.value.email;
          this.loginService.empId=response.json().empId;
          console.log("login success");
          this.router.navigateByUrl('/');
        }
        else  if(response.json().statusMessage=="Invalid emailId/password")
        {
          this.statusMessage="Invalid Password/Email";
          this.loginService.isLogin=false;
          this.loginService.empEmail='';
          this.loginService.empId=null;
        }
    
      }
    )
    
  }

}
