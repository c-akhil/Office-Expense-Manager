import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidation } from '../CustomValidation';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  url:string="http://192.168.2.81:8080/OfficeExpenseManager/update/update1";
  form = new FormGroup({
    name: new FormControl("" ,Validators.required),
    _id:new FormControl(""),
    empId:new FormControl(""),
    designation: new FormControl("" ,Validators.required),
    salary:  new FormControl("" ,Validators.required),
    mobileNo: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email,CustomValidation.cannotContainSpace,CustomValidation.mustContainDotforEmail]),
    gender: new FormControl("",Validators.required),
    password: new FormControl("",[Validators.required,CustomValidation.mustContainOneSpecialCharacter]),
    cpassword: new FormControl("",Validators.required)
  });




  constructor(private http:Http) {
    
  }
   emp = {
    _id:'',
    empId:'',
    name:"" ,
    designation:"",
    mobileNo: '',
    emailId: '',
    salary:'',
    gender: '',
    password: ''

  };

  ngOnInit() {
    this.getEmp();
  }
  getEmp(){

    this.http.get(this.url).subscribe(response => {
      console.log(response.json());

      console.log(response);

     
     
    });


  }

}
