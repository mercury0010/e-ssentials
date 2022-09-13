import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousel1 = 'assets/carousel1.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
