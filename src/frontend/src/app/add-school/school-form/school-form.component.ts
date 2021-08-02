import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss']
})
export class SchoolFormComponent implements OnInit {

  school: School = new School();

  constructor(
    private form: FormBuilder,
    private schoolService: SchoolService) { }

  schoolForm: FormGroup = this.form.group({
    schoolCode: ['', Validators.required],
    schoolName: ['', Validators.required],
    studentCount: ['', Validators.required],
    classCount: ['', Validators.required],
    employeesCount: ['', Validators.required],
    schoolPhoneNumber: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    schoolEmail: ['', Validators.required],
    principal: ['', Validators.required]
  });

  noSpecialNoNumber: RegExp = /^[A-Za-z ]+$/
  phoneRegex: RegExp = /^[0-9+ ]*$/

  ngOnInit(): void {
  }

  resetFields() {
    this.schoolForm.reset();
  }

  onSubmit() {
    if (this.schoolForm.valid)
      this.schoolService.addSchool(this.school).subscribe((success) => { this.schoolForm.reset(), alert("New School Registry Added!") });
    else 
      alert("Please fill out the entire form!");
  }

}
