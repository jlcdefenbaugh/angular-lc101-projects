import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
}

// handleTakeOff() {
//   let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
//   if (result) {
//     this.color = 'blue';
//     this.height = 10000;
//     this.width = 0;
//     this.message = 'Shuttle in flight.'
//   }
// }
