import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Classroom } from 'src/app/models/classroom.model';
import { School } from 'src/app/models/school.model';
import { ClassroomService } from 'src/app/services/classroom.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-add-classroom-form',
  templateUrl: './add-classroom-form.component.html',
  styleUrls: ['./add-classroom-form.component.scss']
})
export class AddClassroomFormComponent implements OnInit {

  edit: boolean = false;

  classroom: Classroom = new Classroom();

  classroomForm: FormGroup = this.form.group({
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
  });

  noSpecialNoNumber: RegExp = /^[A-Za-z ]+$/
  situacao = [{ value: "SIM" }, { value: "NAO" }];
  schoolList: School[] = [];

  constructor(private form: FormBuilder,
    private classroomService: ClassroomService,
    private schoolService: SchoolService) { }

  ngOnInit() {
    this.schoolService.getSchoolList().subscribe(school => {
      this.schoolList = school;
    })
  }

  resetFields() {
    this.classroomForm.reset();
  }

  onSubmit() {
    if (this.classroomForm.valid)
      this.classroomService.addClassroom(this.classroom).subscribe((success) => { this.classroomForm.reset(), alert("New Classroom Registry added"); });
    else
      alert("Please fill out the entire form!")

  }

}
