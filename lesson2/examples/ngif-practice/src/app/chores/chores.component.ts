import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Sit the fuck down'];
   finishedChores = ['Sitting the fuck down'];

   targetImage = 'https://www.bing.com/th?id=OIP.ZCHKvtzpk_w_lq-kmSpMtgHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';

   constructor() { }

   ngOnInit() {
   }

}
