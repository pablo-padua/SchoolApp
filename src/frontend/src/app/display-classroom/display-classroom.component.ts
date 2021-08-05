import { Component, OnInit } from '@angular/core';
import { Classroom } from '../models/classroom.model';
import { TableModule } from 'primeng/table';
import { ClassroomService } from '../services/classroom.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display-classroom',
  templateUrl: './display-classroom.component.html',
  styleUrls: ['./display-classroom.component.scss']
})
export class DisplayClassroomComponent implements OnInit {

  title = "Display Classroom Registries"
  classroom: Classroom[] = [];

  constructor(private classroomService: ClassroomService,
    private router: Router) { }

  ngOnInit() {
    this.classroomService.getClassroomList().subscribe(classroomArray => {
      this.classroom = classroomArray;
    });
  }
  
  editClassroom(classroom: Classroom) {
    this.router.navigateByUrl('/edit-classroom', { state: classroom });
  }

  deleteClassroom(classroom: Classroom) {
    if (confirm(`Are you sure you want to delete the classroom with Class Code: ${classroom.classCode}`)) {
      this.classroomService.deleteClassroom(classroom.classCode).subscribe();
      window.location.reload();
      alert("Registry deleted!")
    } else
      alert("Unsucessful action!")
  }

}
