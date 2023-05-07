import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscriber } from 'rxjs';
import { TypesService } from 'src/app/services/types.service';
import { ModalitiesService } from 'src/app/services/modalities.service';
import { CategoryService } from 'src/app/services/category.service';

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
  jobDescriptionImg:any;
  jobModality:any;
  salaryRange:any;
  lowSalaryLimit:any;
  upperSalaryLimit:any;
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

  constructor(private vacancyService:VacancyService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private formBuilder:FormBuilder,private typesService:TypesService,private modalityService:ModalitiesService,private categoryService:CategoryService){}

  ngOnInit():void{
  this.route.params.subscribe(params => {
    this.vacancyId = params['id'];
  });

  this.getVacancyDataById();
  this.categoryService.getCategories().subscribe((data)=>{
    this.jobCategoryList=data;
  });
  this.modalityService.getModality().subscribe((data)=>{
    this.jobModalityList=data;
  });
  this.typesService.getTypes().subscribe((data)=>{
    this.jobTypeList=data;
  });



  this.updateJob = this.formBuilder.group({
    jobTitle:[''],
    lowSalaryLimit:[''],
      upperSalaryLimit:[''],
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

onSelectFile(event:any){
  const target = event.target as HTMLInputElement;
  const file: File = (target.files as FileList)[0];
  console.log(file);
  this.convertToBase64(file)
}
convertToBase64(file: File) {
  const observable = new Observable((subscriber: Subscriber<any>) => {
    this.readFile(file, subscriber);
  });

  observable.subscribe((d) => {
    console.warn(d)
    this.jobDescriptionImg = d
  })
}

readFile(file: File, subscriber: Subscriber<any>) {
  const filereader = new FileReader();
  filereader.readAsDataURL(file);

  filereader.onload = () => {
    subscriber.next(filereader.result);
    subscriber.complete();
  };
  filereader.onerror = (error) => {
    subscriber.error(error);
    subscriber.complete();
  };
}


getVacancyDataById(){
  this.vacancyService.getVacancyById(this.vacancyId).subscribe((res)=>{
    this.data=res;
    console.warn(this.data);
    this.jobCategory=this.data.category;
  this.company=this.data.employer;
  this.jobDescription=this.data.description;
  this.jobDescriptionImg=this.data.jobDescriptionImg;
  this.jobModality=this.data.modality;
  this.salaryRange=this.data.salaryRange;
  this.jobTitle=this.data.title;
  this.jobType=this.data.type;
  this.category=this.data.category.id;
  this.type=this.data.type.id;
  this.modality=this.data.modality.id;

  var words=this.salaryRange.split(" ");
  this.lowSalaryLimit=words[0];
  this.upperSalaryLimit=words[2];
  console.warn("Low limit: "+this.lowSalaryLimit);
  console.warn("Upper limit: "+this.upperSalaryLimit)
  })

}

updateVacancy(){
  this.submitted = true

this.companyId=this.company.id;
this.salaryRange=this.lowSalaryLimit+" - "+this.upperSalaryLimit;
this.vacancy={
  "id":this.vacancyId,
  "employer":this.companyId,
 "title":this.jobTitle,
 "description":this.jobDescription,
 "descriptionImg":this.jobDescriptionImg,
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
