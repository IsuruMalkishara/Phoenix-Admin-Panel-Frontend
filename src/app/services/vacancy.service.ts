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

  getVacancyById(id:any){
    return this.http.get(this.url+"vacancy/"+id)
  }

  deleteVacancy(id:any){
    return this.http.delete(this.url+"vacancy/"+id)
  }



  updateVacancy(id:any,data:any){
    return this.http.put(this.url+"vacancy/"+id,data);
  }

  addVacancy(data:any){
    return this.http.post(this.url+"vacancy",data);
  }

  getVacancyByEmployerId(id:any){
    return this.http.get(this.url+"vacancies/"+id);
  }

  searchVacancy(data:any){
    return this.http.post(this.url+"vacancy/title",{ title: data });
  }
}
