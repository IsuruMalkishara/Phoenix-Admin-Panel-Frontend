import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8081/';

  getAllEmployers(){
    return this.http.get(this.url+"employer")
  }

  getEmployerById(id:any){
    return this.http.get(this.url+"employer/"+id)
  }

  deleteEmployer(id:any){
    return this.http.delete(this.url+"employer/"+id)
  }


  updateEmployer(id:any,data:any){
    return this.http.put(this.url+"employer/"+id,data);
  }

}
