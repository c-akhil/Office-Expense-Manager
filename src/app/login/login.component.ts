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

  constructor() { }

  ngOnInit() {
  }

  login(email){
    let emp={
    "email":this.form.value.email,
      "password":this.form.value.password
      }
   
    console.log(JSON.stringify(emp));
   
    /* this.http.post(this.url,JSON.stringify(emp))
    .subscribe(
      response =>{
        console.log(response.json());
      }

    ) */
  }

}
