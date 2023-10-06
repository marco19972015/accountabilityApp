import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'accountability-app';

  // We usually perform a cleanup of component resources inside the ngOnDestroy method, such as 
  // Resetting timers and intervals 
  // Unsubscribing from observable streams, 
  ngOnDestroy(): void {
  }
}
