import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8081/';

  getCategories() {
    return this.http.get(this.url+"category");
  }
  deleteCategories(id:any){
    return this.http.delete(this.url+"category/"+id)
  }

  updateCategories(id:any,data:any){
    return this.http.put(this.url+"category/"+id,data);
  }

  addCategories(data:any){
    return this.http.post(this.url+"category",data);
  }

}
