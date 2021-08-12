import { Injectable } from '@angular/core';
import { apiUrl } from '../utils/utils';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classroom } from '../models/classroom.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addClassroom(classroom: Classroom): Observable<Classroom> {
    return this.http.post<Classroom>(`${this.baseUrl}/add-classroom`, classroom);
    
  }

  getClassroomList() {
    return this.http.get<Classroom[]>(`${this.baseUrl}/get-classroom-list`);
  }

  updateClassroom(classroom: Classroom) {
    return this.http.put<Classroom>(`${this.baseUrl}/update-classroom`, classroom);
  }

  deleteClassroom(classCode: number) {
    return this.http.delete<String>(`${this.baseUrl}/delete-classroom/${classCode}`);
  }

}
