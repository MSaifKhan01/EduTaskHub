

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/Models/AllModels';
import { BaseServiceService } from 'src/app/services/base-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ceate-course',
templateUrl: './ceate-course.component.html',
styleUrls: ['./ceate-course.component.css']
})
export class CeateCourseComponent {
  course!: FormGroup;
  constructor(private fb: FormBuilder, private instructorService:BaseServiceService) {
    this.courseCall();
  }
  ngOnInit(): void {}

  courseCall() {
    this.course = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  OnSubmit() {
    console.log('clicked');
    if (this.course.valid) {
      const data:Course = this.course.value;
      console.log(data);
      this.instructorService.createCoursedata(data).subscribe((data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: `Course Created Succesfully`,
          text: `${data.msg}`,
        });
      });
    }
  }

}
