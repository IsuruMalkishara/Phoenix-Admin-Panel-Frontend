
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from 'src/app/services/requests.service';
import { VacancyService } from 'src/app/services/vacancy.service';
import { UnsuccessPopupComponent } from '../unsuccess-popup/unsuccess-popup.component';
import { DeleteRequestComponent } from '../delete-request/delete-request.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {

  vacancyId:any;
  requests:any;
  vacancy:any;

  constructor(private requestService:RequestsService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private vacancyService:VacancyService){}

  ngOnInit():void{

      this.route.params.subscribe(params => {
        this.vacancyId = params['id'];
      });
  this.getVacancyData();
  this.getAllRequests();
}

getAllRequests(){

  this.requestService.getAllRequests(this.vacancyId).subscribe((res)=>{
    console.warn(res);
  this.requests=res;
  })
}

getVacancyData(){
this.vacancyService.getVacancyById(this.vacancyId).subscribe((res)=>{
  console.warn(res);
  this.vacancy=res;
})
}

deleteRequest(id:any){
  this.openDialogBox(id);
}

openDialogBox(id:any){
  this.matDialogRef.open(DeleteRequestComponent,{
    data:{
      id:id
    }
  });
}

}
