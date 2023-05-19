import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobseekerService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8081/';

  getAllJobSeekers(){
    return this.http.get(this.url+"jobseeker")
  }

  getJobSeekerById(id:any){
    return this.http.get(this.url+"jobseeker/"+id)
  }

  deleteJobSeeker(id:any){
    return this.http.delete(this.url+"jobseeker/"+id)
  }

  searchJobSeeker(data:any){
    return this.http.post(this.url+"jobseeker/title",{ title: data });
  }

}
