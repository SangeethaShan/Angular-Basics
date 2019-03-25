import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <!-- proerty binding -->
            <input [id]="myId" type="text" value="Sangeetha"><br/><br/>

            <input id="{{myId}}" type="text" value="Sangeetha"><br/><br/>

            <input [disabled]="false" id="{{myId}}" type="text" value="Sangeetha"><br/><br/>

            <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Sangeetha">

            <!--     class binding -->

            <h2 [class]="mySuccessClass">Code Evolution</h2>

            <h2 class="text-special" [class]="mySuccessClass">Code Evolution</h2>

            <h2 [class.text-danger]="hasError">Code Evolution</h2>

            <h2 [ngClass]="messageClasses">Code Evolution</h2>

            <!--  Style Binding -->

            <h2 [style.color]="hasError ? 'red' : 'green ' ">Code Evolution</h2>

            <h2 [style.color]="highlightColor">Code Evolution</h2>

            <h2 [ngStyle]="titleStyles">Code Evolution</h2>

            <!-- Event Binding -->
            <button (click)="onClick($event)">Greet</button><br/><br/>

            

            <button (click)="greeting='Welcome Sangeetha'">Greet</button>

            <h2>{{greeting}}</h2>

            <!-- Template reference variables -->
            <input #myInput type="text"><br/><br/>
            <button (click)="LogMessage(myInput.value)">Click here to Log</button><br/><br/>

            <!-- Two way Binding -->

            <input [(ngModel)]="name" type="text">
            <h4>{{name}}</h4>


            <!-- ngIf Directive -->
            <h2 *ngIf="true">Code evolution true</h2>

            <h2 *ngIf="displayName; else elseBlock">
             Code evolution
            </h2>

            <ng-template #elseBlock>
              <h2>Name is Hidden</h2>
            </ng-template>

            <!-- ngIf Directive another aproach with if-then-else -->

            <div *ngIf="displayName; then thenBlock1; else elseBlock1">
            </div>

            <ng-template #thenBlock1>
              <h2>Welcome sangeetha</h2>
            </ng-template>

            <ng-template #elseBlock1>
              <h2>Name is hidden here</h2>
            </ng-template>


            <!-- ngSwitch Directive -->

            <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">You picked red color</div> 
              <div *ngSwitchCase="'green'">You picked green color</div> 
              <div *ngSwitchCase="'blue'">You picked blue color</div> 
              <div *ngSwitchDefault>Pick again</div> 

            </div>

            <!-- ngFor Directive -->
            <div *ngFor="let color of colors; index as i">
              <h2>{{i}} {{color}}</h2>
            </div>

            <div *ngFor="let color of colors; first as f">
              <h2>{{f}} {{color}}</h2>
            </div>

            
            <div *ngFor="let color of colors; last as l">
              <h2>{{l}} {{color}}</h2>
            </div>

            
            <div *ngFor="let color of colors; odd as o">
              <h2>{{o}} {{color}}</h2>
            </div>

            
            <div *ngFor="let color of colors; even as e">
              <h2>{{e}} {{color}}</h2>
            </div>            `,
  styles: [ `
   .text-success{
     color: green;
   }
   .text-danger{
     color: red;
   } 
   .text-special{
     font-style: italic;
     font-weight: bold;
   }
  `]
})
export class TestComponent implements OnInit {
//property binding
  public myId = "testId";
 public isDisabled= true;

 //class binding
 public mySuccessClass="text-success";
 public hasError = false;
 public isSpecial = true;
 public messageClasses = {
   "text-success": !this.hasError,
   "text-danger": this.hasError,
   "text-special": this.isSpecial
 }
//style binding
public highlightColor = "orange";
public titleStyles = {
  color: "blue",
  fontStyle : "italic"
}

//Event Binding
public greeting = "";
onClick($event){
  console.log(event);  
}

//Template reference variables

LogMessage(value){
  console.log(value);
}

//Two way binding
public name = "";

//ngIf Directive
displayName=  false;

//ngSwitch Directive
public color="yellow";

//ngFor Directive
public colors=["red", "green", "Blue", "Yellow", "Black", "white"];
  constructor() { }

  ngOnInit() {
  }

}
