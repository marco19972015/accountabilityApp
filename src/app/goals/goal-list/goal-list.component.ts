import { Component } from '@angular/core';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent {
  // why not this?
  // selectedGoal:string = ''

  // Create a selectedGoal property set to an empty string
  selectedGoal = '';

}
