import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import the goals module so we can use functionanilty 
import { GoalsModule } from './goals/goals.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    GoalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
