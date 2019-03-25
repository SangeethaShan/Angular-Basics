import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestService } from './test.service';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpobservableComponent } from './httpobservable/httpobservable.component';
import { ReverseStr } from './test/reverse-str.pipe';
import { FileSizePipePipe } from './file-size-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    EmployeelistComponent,
    HttpobservableComponent,
    ReverseStr,
    FileSizePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
