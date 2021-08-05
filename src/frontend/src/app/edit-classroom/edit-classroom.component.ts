import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Classroom } from '../models/classroom.model';
import { School } from '../models/school.model';
import { ClassroomService } from '../services/classroom.service';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.scss']
})
export class EditClassroomComponent implements OnInit {

  title: string = "Edit Classroom Registry";
  editingClassroom: Classroom = new Classroom();

  noSpecialNoNumber: RegExp = /^[A-Za-z ]+$/
  schoolList: School[] = [];

  editingClassroomForm: FormGroup = this.form.group({
    classCode: ['', Validators.required],
    professor: ['', Validators.required],
    term: ['', Validators.required],
    program: ['', Validators.required],
    classCoordinator: ['', Validators.required],
    email: ['', Validators.required],
    tuitionFee: ['', Validators.required],
    gradYear: ['', Validators.required],
    breakTime: ['', Validators.required],
    cityName: ['', Validators.required],
    availableSeats: ['', Validators.required],
    entranceYear: ['', Validators.required],
    entranceMinGrade: ['', Validators.required],
    studentsCount: ['', Validators.required],
    school: ['', Validators.required]
  })

  constructor(private form: FormBuilder,
    private classroomService: ClassroomService,
    private schoolService: SchoolService,
    private router: Router) { }

  ngOnInit(): void {
    this.editingClassroom = history.state;
    if (this.editingClassroom.classCode === undefined || this.editingClassroom.classCode === null)
      this.router.navigateByUrl('/display-classroom');
    this.schoolService.getSchoolList().subscribe(school => {
      this.schoolList = school;
    })
  }

  quit() {
    this.router.navigateByUrl("/display-classroom");
  }

  onSubmit() {
    if (this.editingClassroomForm.valid)
      this.classroomService.updateClassroom(this.editingClassroom).subscribe((success) => { this.router.navigateByUrl('/display-classroom'), alert("Classroom Registry Edited"); });
    else
      alert("Please fill out the entire form!")
  }

}
