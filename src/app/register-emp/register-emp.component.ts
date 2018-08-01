import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Http} from "@angular/http";
@Component({
  selector: 'register-emp',
  templateUrl: './register-emp.component.html',
  styleUrls: ['./register-emp.component.css']
})
export class RegisterEmpComponent implements OnInit {
  private url: "http://localhost:8080/OfficeExpenseManager/activate/registration";
  emp;
  form= new FormGroup ({
    empname:new FormControl(),
    empDesg:new FormControl(),
    empSal:new FormControl(),
  });

  // constructor(private http:Http) { 
  //   http.get(this.url)
  //     .subscribe(response => {
  //     this.emp=response.json();
  //     console.log(response.json);
  //     });
  // }

  ngOnInit() {

  }
  createEmp(){
    console.log(this.form.value);
  }

}
