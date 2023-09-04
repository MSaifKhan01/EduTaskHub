import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
 
 
  data:any = JSON.parse(localStorage.getItem('user') || '[]');

  constructor(private router: Router) {}

 
  ngOnInit(): void {
    this.Showdata();
   
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
