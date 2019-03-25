import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test', 
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public myTestName = "Welcome to Codevolution!";
  public person = ["firstName", "lastName", "email"];
  public date = new Date();

 @Input('parentData') public name;

  

  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey Sangeetha');
  }

  public employeeList = [];
  
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employeeList = data)
  }

}
