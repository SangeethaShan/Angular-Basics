import { Component } from '@angular/core';
//Meta data - it tels the angular- its not a plain class, its a component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code evolution';
  public name = "Sangeetha";
  public message = "";
}
