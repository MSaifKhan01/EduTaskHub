import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent {

  
  isProfileDropdownOpen = false;
  data = JSON.parse(localStorage.getItem('user') || '[]');
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.showname = this.showName();
    this.toggleLogin = this.data && this.data.name ? true : false;
    console.log(this.toggleLogin);
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

}
