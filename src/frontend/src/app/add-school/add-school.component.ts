import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {

  title: string = "Create School Registry"

  constructor() { }

  ngOnInit(): void {
  }

}
