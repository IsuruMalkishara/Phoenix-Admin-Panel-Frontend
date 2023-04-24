import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8081/';

  getAllVacancy(){
    return this.http.get(this.url+"vacancy")
  }
}
