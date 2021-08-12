import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../utils/utils';
import { School } from '../models/school.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addSchool(school: School): Observable<School> {
    return this.http.post<School>(`${this.baseUrl}/add-school`, school);
  }

  getSchoolList() {
    return this.http.get<School[]>(`${this.baseUrl}/get-schools-list`);
  }

  updateSchool(school: School){
    return this.http.put<School>(`${this.baseUrl}/update-school`, school);
  }

  deleteSchool(schoolCode : number){
    return this.http.delete<String>(`${this.baseUrl}/delete-school/${schoolCode}`);
  }

}
