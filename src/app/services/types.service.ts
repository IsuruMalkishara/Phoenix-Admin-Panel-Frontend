import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8081/';

  getTypes() {
    return this.http.get(this.url+"type");
  }
  deleteType(id:any){
    return this.http.delete(this.url+"type/"+id)
  }

  updateType(id:any,data:any){
    return this.http.put(this.url+"type/"+id,data);
  }

  addType(data:any){
    return this.http.post(this.url+"type",data);
  }

}
