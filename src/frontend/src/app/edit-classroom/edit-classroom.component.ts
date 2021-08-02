import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddClassroomFormComponent } from '../add-classroom/add-classroom-form/add-classroom-form.component';
import { Classroom } from '../models/classroom.model';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.scss']
})
export class EditClassroomComponent implements OnInit {

  @ViewChild(AddClassroomFormComponent) classFormComponent!: AddClassroomFormComponent;
  title: string = "Edit Classroom Registry";
  editingClassroom: Classroom = new Classroom();
  editForm: FormGroup = this.form.group({
    classCode: this.editingClassroom.classCode,
    professor: [this.editingClassroom.professor, Validators.required],
    term: [this.editingClassroom.term, Validators.required],
    program: [this.editingClassroom.program, Validators.required],
    classCoordinator: [this.editingClassroom.classCoordinator, Validators.required],
    email: [this.editingClassroom.email, Validators.required],
    tuitionFee: [this.editingClassroom.tuitionFee, Validators.required],
    gradYear: [this.editingClassroom.gradYear, Validators.required],
    breakTime: [this.editingClassroom.breakTime, Validators.required],
    cityName: [this.editingClassroom.cityName, Validators.required],
    availableSeats: [this.editingClassroom.availableSeats, Validators.required],
    entranceYear: [this.editingClassroom.entranceYear, Validators.required],
    entranceMinGrade: [this.editingClassroom.entranceMinGrade, Validators.required],
    studentsCount: [this.editingClassroom.studentsCount, Validators.required],
    school: [this.editingClassroom.school, Validators.required]
  })

  constructor(private form: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.editingClassroom = history.state;
    // this.classFormComponent.classroomForm.setValue(this.editForm);
    // this.classFormComponent.classroomForm.setValue(this.editForm);
    console.log(this.editingClassroom);
    console.log(this.editingClassroom.classCode);

  }

  fillForm() {
    this.classFormComponent.classroomForm.setValue({
      classCode: this.editingClassroom.classCode,
      professor: [this.editingClassroom.professor, Validators.required],
      term: [this.editingClassroom.term, Validators.required],
      program: [this.editingClassroom.program, Validators.required],
      classCoordinator: [this.editingClassroom.classCoordinator, Validators.required],
      email: [this.editingClassroom.email, Validators.required],
      tuitionFee: [this.editingClassroom.tuitionFee, Validators.required],
      gradYear: [this.editingClassroom.gradYear, Validators.required],
      breakTime: [this.editingClassroom.breakTime, Validators.required],
      cityName: [this.editingClassroom.cityName, Validators.required],
      availableSeats: [this.editingClassroom.availableSeats, Validators.required],
      entranceYear: [this.editingClassroom.entranceYear, Validators.required],
      entranceMinGrade: [this.editingClassroom.entranceMinGrade, Validators.required],
      studentsCount: [this.editingClassroom.studentsCount, Validators.required],
      school: [this.editingClassroom.school, Validators.required]
    });
  }

}
