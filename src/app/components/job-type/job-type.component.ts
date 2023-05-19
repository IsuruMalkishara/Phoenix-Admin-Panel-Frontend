import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TypesService } from 'src/app/services/types.service';
import { AddJobTypeComponent } from '../add-job-type/add-job-type.component';
import { UpdateJobTypeComponent } from '../update-job-type/update-job-type.component';
import { DeleteJobTypeComponent } from '../delete-job-type/delete-job-type.component';

@Component({
  selector: 'app-job-type',
  templateUrl: './job-type.component.html',
  styleUrls: ['./job-type.component.css']
})
export class JobTypeComponent {

  types:any;

  constructor(private typesService:TypesService,private router:Router,private matDialogRef:MatDialog){}

  ngOnInit(){

    this.getAllTypes();

  }
//all types data
getAllTypes(){
this.typesService.getTypes().subscribe((res)=>{
  console.warn(res);
this.types=res;
})
  }

  //delete type
deleteType(id:any){
  this.openDeleteDialogBox(id);
}

openDeleteDialogBox(id:any){
  this.matDialogRef.open(DeleteJobTypeComponent,{
    data:{
      id:id
    }
  });
}

//update type
updateType(id:any,title:any){
  this.openUpdateDialogBox(id,title);
}

openUpdateDialogBox(id:any,title:any){
  this.matDialogRef.open(UpdateJobTypeComponent,{
    data:{
      id:id,
      title:title
    }
  });
}

//add type
addType(){
  this.openaddDialogBox();
}

openaddDialogBox(){
  this.matDialogRef.open(AddJobTypeComponent);
}
}

