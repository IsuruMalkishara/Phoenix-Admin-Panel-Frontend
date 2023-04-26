import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-vacancy-data',
  templateUrl: './edit-vacancy-data.component.html',
  styleUrls: ['./edit-vacancy-data.component.css']
})
export class EditVacancyDataComponent {
  updateJob!:FormGroup;
  submitted=false;

  vacancyId:any;
  data:any;

  jobCategory:any;
  company:any;
  jobDescription:any;
  jobModality:any;
  salaryRange:any;
  jobTitle:any;
  jobType:any;
  modality:any;
  category:any;
  type:any;

  jobCategoryList:any;
  jobModalityList:any;
  jobTypeList:any;

  vacancy:any;

  companyId:any;

  constructor(private vacancyService:VacancyService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private formBuilder:FormBuilder){}

  ngOnInit():void{
  this.route.params.subscribe(params => {
    this.vacancyId = params['id'];
  });

  this.getVacancyDataById();
  this.vacancyService.categories().subscribe((data)=>{
    this.jobCategoryList=data;
  });
  this.vacancyService.modality().subscribe((data)=>{
    this.jobModalityList=data;
  });
  this.vacancyService.types().subscribe((data)=>{
    this.jobTypeList=data;
  });



  this.updateJob = this.formBuilder.group({
    jobTitle:[''],
    salaryRange:[''],
    jobDescription:[''],
    category:[''],
    modality:[''],
    type:[''],

  })

}
editorConfig = {
  editable: true,
  toolbarHiddenButtons: [
    ['insertVideo','insertImage','strikeThrough','indent', 'outdent','textColor','backgroundColor','fontName', 'fontSize','link', 'unlink','heading','removeFormat','insertHorizontalRule', 'toggleEditorMode']
  ]
};

getVacancyDataById(){
  this.vacancyService.getVacancyById(this.vacancyId).subscribe((res)=>{
    this.data=res;
    console.warn(this.data);
    this.jobCategory=this.data.category;
  this.company=this.data.employer;
  this.jobDescription=this.data.description;
  this.jobModality=this.data.modality;
  this.salaryRange=this.data.salaryRange;
  this.jobTitle=this.data.title;
  this.jobType=this.data.type;
  this.category=this.data.category.id;
  this.type=this.data.type.id;
  this.modality=this.data.modality.id;
  })
}

updateVacancy(){
  this.submitted = true

this.companyId=this.company.id;

this.vacancy={
  "id":this.vacancyId,
  "employer":this.companyId,
 "title":this.jobTitle,
 "description":this.jobDescription,
 "salaryRange":this.salaryRange,
 "category":this.category,
 "modality":this.modality,
 "type":this.type

}

console.warn(this.vacancy);

this.vacancyService.updateVacancy(this.vacancyId,this.vacancy).subscribe((res)=>{
  console.warn(res);

  if(res==true){
    this.router.navigateByUrl("dashboard/vacancy/"+this.vacancyId);
    this.openDialog();
  }
})
}

openDialog(){
  this.matDialogRef.open(PopupComponent,{
    data : {
      message : 'Successfully Updated'
    }
  });
}
}
