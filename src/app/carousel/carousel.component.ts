import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


    images = [
      {'image': "assets/images/2.png"},
      {'image': "assets/images/3.png"},
      {'image': "assets/images/4.png"},
      {'image': "assets/images/5.png"},
      {'image': "assets/images/6.png"}
      
    ];
   

  ngOnInit(): void {
  }

}


