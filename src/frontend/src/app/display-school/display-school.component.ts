import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from '../models/school.model';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-display-school',
  templateUrl: './display-school.component.html',
  styleUrls: ['./display-school.component.scss']
})
export class DisplaySchoolComponent implements OnInit {

  title = "Display School Registries"
  school: School[] = [];

  constructor(private schoolService: SchoolService,
    private router: Router) { }

  ngOnInit() {
    this.schoolService.getSchoolList().subscribe(schoolArray => {
      this.school = schoolArray;
    });
    this.checkThings();
  }

  checkThings() {
    for (var classs of this.school) {
      console.log("a");
      console.log(classs);
    }
  }

  buttonEdit() {

  }

  editSchool(school: School) {
    this.router.navigateByUrl('/edit-school', { state: school });
  }

  deleteSchool(school: School) {
    if (confirm(`Are you sure you want to delete the school with Class Code: ${school.schoolCode}`))
      alert("a");
  }

}
