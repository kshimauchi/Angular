import { Component, OnInit } from '@angular/core';
//component decorator
//selector is a unique name
//templateUrl, can also do inline as well 
//sass or css
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  //typescript way
  appTitle: string ='myapp';
  
  constructor() { }

  ngOnInit() {
  }

}
