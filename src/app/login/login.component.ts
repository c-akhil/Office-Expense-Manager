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

  constructor(private http:Http) { 

   }

  ngOnInit() {
  }

  login(email){
    let emp={
    "email":email,
      "password":this.form.value.password
      }
   
    console.log(JSON.stringify(emp));
   
     this.http.post("http://192.168.2.81:8080/OfficeExpenseManager/activate/registration",emp)
    .subscribe(
      response =>{
        console.log(response.json());
    
      }

    ) 
  }

}
