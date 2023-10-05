import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';



@NgModule({
  declarations: [
    GoalListComponent,
    GoalDetailComponent
  ],
  imports: [
    CommonModule,
    GoalComponent  // Should not be placed in a declarations array since it is a standalone component 
  ],
  exports:[GoalListComponent] // we need to export the component so we can use it in our app.c.html
})
export class GoalsModule {}
