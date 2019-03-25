import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Sangeetha';
  myTitle = 'You are hovering Title..';
  myClass = 'text-info';
  myText = 'text';
  myTextboxValue = 'Enter your name here';
  siteUrl = window.location.href;
  public hasErr = true;
  public myTextColor = "green";
  public titleStyles = {
    color : "blue",
    fontSize: "40px",
    fontStyle : "italic",
    textDecoration : "underline",
    fontWeight : "bold"
  }
  public greetText = '';
  public myName = '';
  public displayName = false;
  public color = 'yellow';
  public colors = ["RED", "GREEN", "BLUE", "YELLOW"]; 
  public firstName = 'Sangeetha';
  public message = '';

  studentInfo = {
    "name" : "sangeetha",
    "age" : 27,
    "isWorking" : "No",
    "gender" : "Female"
  } 
  myTestMethod(){
    return "Hello " + this.name; 
  }
  myFunction(event){
    console.log(event);
    this.greetText= event.type;
  }

  logMessage(value){
    console.log(value);
  }
}