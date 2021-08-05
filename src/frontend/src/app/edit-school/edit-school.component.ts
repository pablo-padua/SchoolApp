import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { School } from '../models/school.model';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-edit-school',
  templateUrl: './edit-school.component.html',
  styleUrls: ['./edit-school.component.scss']
})
export class EditSchoolComponent implements OnInit {

  title: string = "Edit School Registry"
  editingSchool: School = new School();

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

  constructor(
    private router: Router,
    private schoolService: SchoolService,
    private form: FormBuilder) { }

  ngOnInit() {
    this.editingSchool = history.state;
    if (this.editingSchool.schoolCode == null || this.editingSchool.schoolCode == undefined)
      this.router.navigateByUrl('/display-school');
  }

  quit() { this.router.navigateByUrl("/display-school"); }

  onSubmit() {
    if (this.schoolForm.valid)
      this.schoolService.updateSchool(this.editingSchool).subscribe((success) => { this.router.navigateByUrl('/display-school'), alert("School Registry Edited"); });
    else
      alert("Please fill out the entire form!")
  }

}

