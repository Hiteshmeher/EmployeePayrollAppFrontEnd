import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  logoUrl="./assets/images/logo.png";
  image1Url="./assets/profile-images/Ellipse -1.png";
  image2Url="./assets/profile-images/Ellipse -2.png";
  image3Url="./assets/profile-images/Ellipse -3.png";
  image4Url="./assets/profile-images/Ellipse -4.png";

  constructor() { }

  ngOnInit(): void {
  }

}
