import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { PopupComponent } from '../popup/popup.component';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent {
  postJob!:FormGroup;
  submitted=false;

  vacancy:any;

  jobCategory:any;
  company:any;
  jobDescription:any;
  jobDescriptionImg:any;
  jobModality:any;
  salaryRange:any;
  jobTitle:any;
  jobType:any;
  modality:any;
  category:any;
  type:any;


  id:any;
  companyId:any;

  jobCategoryList:any;
  jobModalityList:any;
  jobTypeList:any;

noDescription:boolean=false;
  constructor(private formBuilder:FormBuilder,private matDialogRef:MatDialog,private vacancyService:VacancyService,private route: ActivatedRoute,private router: Router){

  }

  ngOnInit():void{

    this.route.params.subscribe(params => {
      this.companyId = params['id'];
    });

    this.vacancyService.categories().subscribe((data)=>{
      this.jobCategoryList=data;
    });
    this.vacancyService.modality().subscribe((data)=>{
      this.jobModalityList=data;
    });
    this.vacancyService.types().subscribe((data)=>{
      this.jobTypeList=data;
    });



    this.postJob = this.formBuilder.group({
      jobTitle:['',Validators.required],
      salaryRange:['',Validators.required],
      jobDescription:[''],
      jobDescriptionImg:[''],
      category:['',[Validators.required]],
      modality:['',[Validators.required]],
      type:['',[Validators.required]],

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

  openDialog(){
    this.matDialogRef.open(PopupComponent,{
      data : {
        message : 'Successfully Posted Vacancy'
      }
    });
  }

  addVacancy(){
    this.submitted = true


    if(this.postJob.invalid){
      return
    }else if(this.jobDescription==null && this.jobDescriptionImg==null){
    this.noDescription=true;
    }else{
  this.vacancy={
    "employer":this.companyId,
   "title":this.jobTitle,
   "description":this.jobDescription,
   "descriptionImg":this.jobDescriptionImg,
   "salaryRange":this.salaryRange,
   "category":this.category,
   "modality":this.modality,
   "type":this.type

  }

  console.warn(this.vacancy)
    }
  this.vacancyService.addVacancy(this.vacancy).subscribe((res)=>{
    console.warn(res);

    if(res==true){
      this.router.navigateByUrl("dashboard/employer/"+this.companyId+"/vacancy");
      this.openDialog();
    }
  })
  }
}
