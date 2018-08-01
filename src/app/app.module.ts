import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { RegisterEmpComponent } from './register-emp/register-emp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegisterEmpComponent,
    HomeComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
          {
            path:" ",
            component:HomeComponent
          },
          {
            path:"graph",
            component:GraphComponent
          },
          {
            path:"register",
            component:RegisterEmpComponent
          },
          {
            path:"update",
            component:RegisterEmpComponent
          },

    ]),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
