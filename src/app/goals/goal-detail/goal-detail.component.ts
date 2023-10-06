// adding the Input, Output, EventEmitter artifacts
import { Component, Input, OnInit ,Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css'],
// encapsulation: ViewEncapsulation.None  // setting this to none allows our css to leak out into other components
})
export class GoalDetailComponent implements OnChanges{
  // Defining a goalName property that uses the Input decorator and initailized to an empty string
  @Input() goalName = '';

  // Defining a new component property that uses the Output decorator 
  // we add a generic to declare the type of data that would be passed into the goal list component
  @Output() currentGoal  = new EventEmitter<string>();  // NOTE EventEmitter is an extension of RxJS

  // Create the show method 
  show() {
    // Allows us to show our selected goal
    // We have to now pass in the string value so we add an instance of goalName
    this.currentGoal.emit(this.goalName);
  }

  // ngOnChanges is called when ng detects that the value of an input data binding has changed
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['goalName'];
    // if there is no product change don't log anything, if there is log the old and new value
    if (!product.isFirstChange()){
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log(`Goal has changed from ${oldValue} to ${newValue}`);
    }
  }

  /* NOTE this used the OnInit artifact which whould need to be implemented in the export line
  // with ngOnInit we can see what is in the selectedGoal variable
  ngOnInit(): void {
    console.log(`goalName is ${this.goalName} in the ngOnInit`);
  }

  // This will show the current name in our goalName variable using a constructor
  constructor() {  // We should keep constructors empty and devoid of logic other than seeting initial variables
    console.log(`goalName is ${this.goalName} in the constructor`);
  }
  */
}
