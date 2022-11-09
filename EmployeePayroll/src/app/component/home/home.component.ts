import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logoUrl="./assets/images/logo.png";
  addUrl="./assets/icons/add-24px.svg";
  deleteUrl="./assets/icons/delete-black-18dp.svg";
  editUrl="./assets/icons/create-black-18dp.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
