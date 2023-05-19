import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalitiesService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8081/';

  getModality() {
    return this.http.get(this.url+"modality");
  }
  deleteModality(id:any){
    return this.http.delete(this.url+"modality/"+id)
  }

  updateModalitys(id:any,data:any){
    return this.http.put(this.url+"modality/"+id,data);
  }

  addModality(data:any){
    return this.http.post(this.url+"modality",data);
  }
}
