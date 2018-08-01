import { Emp } from './../emp';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Http} from "@angular/http";

@Component({
  selector: 'register-emp',
  templateUrl: './register-emp.component.html',
  styleUrls: ['./register-emp.component.css']
})
export class RegisterEmpComponent implements OnInit {
  private url: "http://192.168.2.81:8080/OfficeExpenseManager/activate/registration";
 
  form= new FormGroup ({
    name:new FormControl(),
    designation:new FormControl(),
    mobileNo:new FormControl(),
    email:new FormControl(),
    gender:new FormControl(),
    password:new FormControl(),
    
  });

  constructor(private http:Http) { 
    // http.get(this.url)
    //   .subscribe(response => {
    //   this.emp=response.json();
    //   console.log(response.json);
    //   });
  }

  ngOnInit() {

  }
  createEmp(){
    let emp={
      "name":this.form.value.name,
      "designation":this.form.value.designation,
      "mobileNo":this.form.value.mobileNo,
      "email":this.form.value.email,
      "gender":this.form.value.gender,
      "password":this.form.value.password
      }
    console.log(this.form.value.name);
  
    console.log(JSON.stringify(emp));
   
    this.http.post(this.url,JSON.stringify(emp))
    .subscribe(
      response =>{
        console.log(response);
      }

    )
  }

}
