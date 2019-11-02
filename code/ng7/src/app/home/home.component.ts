import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //when page loads, it will not attach the grey to it
 // h1Style: boolean = false;
  users: Object;

  //using service 
  constructor(private data: DataService) { }
//lifecycle hook automatically loads
  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
      this.users = data
      console.log(this.users)
    })
  }

}
