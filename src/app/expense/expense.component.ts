import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  form= new FormGroup ({
    expense:new FormControl(),
   date:new FormControl(),
   spentAmount:new FormControl(),
   collectAmount:new FormControl(),
   
  });

  constructor(private http:Http) { 

   }

  ngOnInit() {
  }

  submit(){
     this.http.post("http://192.168.2.81:8080/OfficeExpenseManager/login/login1",this.form.value )
    .subscribe(
      response =>{
        console.log(response);
      }

    ) 
  }


}
