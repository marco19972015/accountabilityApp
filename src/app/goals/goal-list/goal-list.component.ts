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

  // Create method to create a window alert that shows us our selected goal
  onShow(goalName:string) {  // since we are receiving data we need to add a parameter of type string (due to our generic)
    window.alert(`You just selected ${this.selectedGoal}`)
  }


}
