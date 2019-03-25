import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../test.service';
import { error } from 'util';

@Component({
  selector: 'app-test1',
  template: `
  <!-- Component Interaction --->
   <!-- <h2>{{"Hello " + name}}</h2>

    <button (click)="fireEvent()">Send Event</button><br/><br/> -->

  <!-- Pipes --->
 <!-- {{name | lowercase}}<br/>
  {{name | uppercase}}<br/>
  {{name | titlecase}}<br/>
  {{name | slice:1:5}}<br/>
  {{person | json}}<br/>
  {{myBesties | json}}

  <h2>{{5.678 | number: '1.2-3'}}</h2>
  <h2>{{5.678 |  number: '3.4-5'}}</h2>
  <h2>{{5.678 |  number: '3.1-2'}}</h2>

  <h2>{{0.25 | percent}}</h2>
  <h2>{{0.25 | currency}}</h2> 
  <h2>{{0.25 | currency: 'GBP'}}</h2> 
  <h2>{{0.25 | currency: 'EUR' : 'code'}}</h2> 


  <h2>{{ date }}</h2> 
  <h2>{{ date | date: 'short'}}</h2> 
  <h2>{{ date | date: 'shortDate'}}</h2> 
  <h2>{{ date | date: 'shortTime'}}</h2> -->

  <h3> {{ user.name | reverseStr }} </h3>

  <ul *ngFor="let besties of myBesties">
    <li>{{besties.id}}.{{besties.name}}-{{besties.age}}</li>
  </ul>
  {{myBesties | json}}
  <h2>Employee List</h2>
  <h3>{{errorMsg}}</h3>
  <ul *ngFor="let emplst of employees">
    <li>{{emplst.id}}.{{emplst.name}}-{{emplst.age}}</li>
  </ul>
  

  `,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public user={
    'name': 'banana',
    'email': 'deepasn92@gmail.com'
  }
 
 //Component Interaction
 //@Input() public parentData; or the following method
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  //Pipes
  public person = {
    "firstName" : "San",
    "lastName" : "Shan"
  }

  //Dependency Injection 
  public employees = [];
  public errorMsg;
  public myBesties = [ { "id": 1, "name": "San", "age": 26 }, { "id": 2, "name": "Shan", "age": 29 }, { "id": 3, "name": "Geeta", "age": 27 } ];
  
  public date = new Date();
  
  constructor(private _emplist: TestService) { }

  ngOnInit() {
    this._emplist.getEmployees()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error);
  }

  fireEvent(){
    this.childEvent.emit('Hello sangeetha!');
  }
  f(input: boolean) {
    let a = 100;

    if (input) {
        let b = a + 1;
        return b;
    }    
}
}
