import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  PortalFrInstructor:boolean=false
 

  

  showName(): string {
    if(this.data.role=="instructor"){
      // console.log("testing perpose",this.data.role)
    this.PortalFrInstructor=true
    }
    if (this.data && this.data.name) {
      console.log(this.data.name);
      return this.data.name;
    }
   
    return '';
  }

  LoginRoute() {
    if (this.data.length == 0) {
      this.router.navigate(['/login']);
    }
  }
  logout(): void {
    localStorage.clear()
  
    this.showname = '';
    this.toggleLogin = false;
 
    Swal.fire({
      'icon':'success',
      'title':'Logout Successful',
      'text':'You have logout succesfully'
    })
    // window.location.reload();
    this.router.navigate(['']).then(()=>{
      window.location.reload();
    });
    // 
  }

  userProfile(){
    console.log("hghghg")
    this.router.navigate(['/userprofile']);
  }

  
}
