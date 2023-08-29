import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false; // Set this based on login status
  userName = 'John Doe'; // Set the user's name

  isProfileDropdownOpen = false;

  constructor() {}

  ngOnInit(): void {}
  Onclick(){
     this.isLoggedIn=!this.isLoggedIn
     console.log(this.isLoggedIn)
  }

}
