import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile: string[];

  constructor() { }

  ngOnInit() {
  }
 
  handleChange(event) {
    console.log(event.target.value)
    this.profile.push(event.target.value)
  }
}
