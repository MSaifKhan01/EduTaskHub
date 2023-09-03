import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  // isLoggedIn = false; // Set this based on login status
  // userName = 'John Doe'; // Set the user's name

  // isProfileDropdownOpen = false;
 
  data:any = JSON.parse(localStorage.getItem('user') || '[]');

  constructor(private router: Router) {}

  // ngOnInit(): void {}
  ngOnInit(): void {
    this.Showdata();
    // this.toggleLogin = this.data && this.data.name ? true : false;
    // console.log(this.toggleLogin);
  }


 

  

  Showdata(): string {
    if (this.data) {
      // console.log("fghjv")
      console.log(this.data);
      return this.data;
    }
    return '';
  }


}
