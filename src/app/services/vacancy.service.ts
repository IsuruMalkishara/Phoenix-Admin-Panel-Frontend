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

  types() {
    return this.http.get(this.url+"type");
  }
  modality() {
    return this.http.get(this.url+"modality");
  }
  categories() {
    return this.http.get(this.url+"category");
  }

  updateVacancy(id:any,data:any){
    return this.http.put(this.url+"vacancy/"+id,data);
  }
}
