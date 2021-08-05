import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../utils/utils';
import { School } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  addSchool(school: School): Observable<School> {
    return this.http.post<School>(`${apiUrl}/add-school`, school);
  }

  getSchoolList() {
    return this.http.get<School[]>(`${apiUrl}/get-schools-list`);
  }

  updateSchool(school: School){
    return this.http.put<School>(`${apiUrl}/update-school`, school);
  }

  deleteSchool(schoolCode : number){
    return this.http.delete<String>(`${apiUrl}/delete-school/${schoolCode}`);
  }

}
