import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 items: Array<any> = [];
  constructor() { }

  ngOnInit() {
 
  	this.items = [
      { name: 'assets/images/1.jpg' },
      { name: 'assets/images/2.jpg' },
      { name: 'assets/images/2.jpg' },
       { name: 'assets/images/1.jpg' },
      { name: 'assets/images/2.jpg' },
      { name: 'assets/images/2.jpg' },
       { name: 'assets/images/1.jpg' },
      { name: 'assets/images/2.jpg' },
      { name: 'assets/images/2.jpg' },
       { name: 'assets/images/1.jpg' },
      { name: 'assets/images/2.jpg' },
      { name: 'assets/images/2.jpg' },
       { name: 'assets/images/1.jpg' },
      { name: 'assets/images/2.jpg' },
      { name: 'assets/images/2.jpg' }

   
    ];
  }

}
