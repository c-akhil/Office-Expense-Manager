import { Http } from '@angular/http';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private loginService:LoginService,private http:Http) { }
  form= new FormGroup ({
    sdate: new FormControl("",[Validators.required,Validators.email]),
   edate:new FormControl("",[Validators.required]),
    
  });

  ngOnInit() {
  }
  getDate(){
    let s=Date.parse("" + this.form.value.sdate as string)
    let e=Date.parse("" + this.form.value.edate as string)
    this.http.get("http://192.168.2.81:8080/OfficeExpenseManager/login/login1?startDate="+s+"&endDate="+e).subscribe(response => {
      console.log(response.json());
      console.log( s );
     

      console.log(response);

     
     
    });


  }



}
