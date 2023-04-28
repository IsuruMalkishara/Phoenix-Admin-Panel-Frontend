import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8081/';

  getAllRequests(id:any){
    return this.http.get(this.url+"request/"+id)
  }

  deleteRequest(id:any){
    return this.http.delete(this.url+"request/"+id)
  }

}
