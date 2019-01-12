import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentModel } from '../core/student.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'cm-student-modal-dialog',
  templateUrl: './student-modal-dialog.component.html',
  styleUrls: ['./student-modal-dialog.component.css']
})
export class StudentModalDialogComponent implements OnInit {

  studentForm: FormGroup;
  student: StudentModel;

  constructor(
    public dialogRef: MatDialogRef<StudentModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.student = this.data ? this.data.student : new StudentModel();
  }

  ngOnInit() {
    this.createStudentForm();
  }
  private createStudentForm() {
    this.studentForm = new FormGroup({
      name: new FormControl(this.student.full_name, Validators.required),
      email: new FormControl(this.student.email),
    });
  }

}
