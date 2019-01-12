import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseModel } from '../core/course.model';

@Component({
  selector: 'cm-course-delete-modal-dialog',
  templateUrl: './course-delete-modal-dialog.component.html',
  styleUrls: ['./course-delete-modal-dialog.component.css']
})
export class CourseDeleteModalDialogComponent implements OnInit {

  courseDeleteForm: FormGroup;
  course: CourseModel;

  constructor() { }

  ngOnInit() {
    this.createCourseDeleteForm();
  }

  private createCourseDeleteForm() {
    this.courseDeleteForm = new FormGroup({
      name: new FormControl(this.course.name, Validators.required)
    });

   }
  }

