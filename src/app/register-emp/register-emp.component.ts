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
  emp:any;
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
    console.log(this.form.value);
    this.http.post(this.url,JSON.stringify(this.form.value))
    .subscribe(
      response =>{
        console.log(response);
      }

    )
  }

}
