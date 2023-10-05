// adding the Input, Output, EventEmitter artifacts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent {
  // Defining a goalName property that uses the Input decorator and initailized to an empty string
  @Input() goalName = '';

  // Defining a new component property that uses the Output decorator 
  @Output() currentGoal  = new EventEmitter  // NOTE EventEmitter is an extension of RxJS

  // Create the show method 
  show() {
    // Allows us to show our selected goal
    this.currentGoal.emit();
  }
}
