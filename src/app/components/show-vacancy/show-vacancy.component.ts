import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { WarningPopupComponent } from '../warning-popup/warning-popup.component';

@Component({
  selector: 'app-show-vacancy',
  templateUrl: './show-vacancy.component.html',
  styleUrls: ['./show-vacancy.component.css']
})
export class ShowVacancyComponent {

  vacancyId:any;
  data:any;

  constructor(private vacancyService:VacancyService,private route:ActivatedRoute,private router: Router,private matDialogRef:MatDialog){}

  ngOnInit():void{
  this.route.params.subscribe(params => {
    this.vacancyId = params['id'];
  });

  this.getVacancyDataById();

}

getVacancyDataById(){
  this.vacancyService.getVacancyById(this.vacancyId).subscribe((res)=>{
    this.data=res;
    console.warn(this.data);
  })
}

openDialogBox(id:any){
  this.matDialogRef.open(WarningPopupComponent,{
    data:{
      id:id
    }
  });
}

delete(id:any){
this.openDialogBox(id);
}

update(id:any){
  this.router.navigateByUrl("dashboard/vacancy/"+id+"/edit");
}

showRequests(id:any){
  this.router.navigateByUrl("dashboard/vacancy/"+id+"/request");
}
}
