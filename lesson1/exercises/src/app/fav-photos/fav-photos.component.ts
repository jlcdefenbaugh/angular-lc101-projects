import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Kick-Ass Photos';
  image1 = 'https://th.bing.com/th/id/OIP.l0hQ3Daq6X19WoF2qy1MigHaJ4?w=198&h=264&c=7&r=0&o=5&pid=1.7';
  image2 = 'https://th.bing.com/th/id/OIP.tlymlo9ZmZL0L0OBOscegQHaLL?w=198&h=299&c=7&r=0&o=5&pid=1.7';
  image3 = 'https://th.bing.com/th/id/OIP.0KoCfDizXzGsHBUyd-ptZQHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7';

  constructor() { }

  ngOnInit() {
  }

}