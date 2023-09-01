import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false; // Set this based on login status
  userName = 'John Doe'; // Set the user's name

  isProfileDropdownOpen = false;
  data = JSON.parse(localStorage.getItem('user') || '[]');

  constructor(private router: Router) {}

  // ngOnInit(): void {}
  ngOnInit(): void {
    this.showname = this.showName();
    this.toggleLogin = this.data && this.data.name ? true : false;
    console.log(this.toggleLogin);
  }
  Onclick(){
     this.isLoggedIn=!this.isLoggedIn
     console.log(this.isLoggedIn)
  }

  showname: string = '';
  toggleLogin: boolean = false;

  

  showName(): string {
    if (this.data && this.data.name) {
      console.log(this.data.name);
      return this.data.name;
    }
    return '';
  }

  rigisterRoute() {
    if (this.data.length == 0) {
      this.router.navigate(['/register']);
    }
  }
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.showname = '';
    this.toggleLogin = false;
 
    alert('Logout Succesfully');
    this.router.navigate(['']);
    // window.location.reload();
  }

  
}
