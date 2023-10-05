// adding the Input artifact
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent {
  
  // Defining a goalName property that uses the Input decorator and initailized to an empty string
  @Input() goalName = '';

}
