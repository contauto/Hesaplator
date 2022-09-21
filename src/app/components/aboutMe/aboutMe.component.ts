import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutMe',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.css']
})
export class AboutMeComponent implements OnInit {

  year:number=Number((new Date()).getFullYear())
  constructor() { }

  ngOnInit() {
  }

}
