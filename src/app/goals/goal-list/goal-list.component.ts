import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { GoalDetailComponent } from '../goal-detail/goal-detail.component';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements AfterViewInit{
  // why not this?
  // selectedGoal:string = 'hello';

  // Create a selectedGoal property set to an empty string
  selectedGoal = 'Create template for app';  // this is what is called from the ngAfterViewInit

  // Create method to create a window alert that shows us our selected goal
  onShow(goalName:string) {  // since we are receiving data we need to add a parameter of type string (due to our generic)
    window.alert(`You just selected ${this.selectedGoal}`)
  }

  // Configures a view query with our component 
  @ViewChild(GoalDetailComponent) goalDetail: GoalDetailComponent | undefined;

  // We are allowed to call this since the view has been initialized
  ngAfterViewInit(): void {
    if (this.goalDetail) {  // We query the goalDetail  
      console.log(this.goalDetail.goalName);  // log out the goalName 
    }
  }
}
