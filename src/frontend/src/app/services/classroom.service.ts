import { Injectable } from '@angular/core';
import { apiUrl } from '../utils/utils';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classroom } from '../models/classroom.model';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient) { }

  addClassroom(classroom: Classroom): Observable<Classroom> {
    return this.http.post<Classroom>(`${apiUrl}/add-classroom`, classroom);
  }

  getClassroomList() {
    return this.http.get<Classroom[]>(`${apiUrl}/get-classroom-list`);
  }

}