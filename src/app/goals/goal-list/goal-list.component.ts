import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { GoalDetailComponent } from '../goal-detail/goal-detail.component';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements AfterViewInit{
  // why not this?
  // selectedGoal:string = ''

  // Create a selectedGoal property set to an empty string
  selectedGoal = 'Create template for app';

  // Create method to create a window alert that shows us our selected goal
  onShow(goalName:string) {  // since we are receiving data we need to add a parameter of type string (due to our generic)
    window.alert(`You just selected ${this.selectedGoal}`)
  }

  //
  @ViewChild(GoalDetailComponent) goalDetail: GoalDetailComponent | undefined;


  ngAfterViewInit(): void {
    if (this.goalDetail) {
      console.log(this.goalDetail.goalName);
    }
  }
}
