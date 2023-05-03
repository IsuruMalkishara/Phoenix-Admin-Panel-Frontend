import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-update-job-type',
  templateUrl: './update-job-type.component.html',
  styleUrls: ['./update-job-type.component.css']
})
export class UpdateJobTypeComponent {
  updateType!:FormGroup;
  submitted=false;

  type:any;
  id:any;
  title:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialog,private formBuilder:FormBuilder,private typesService:TypesService) {
    this.id = data.id;
    this.title=data.title;
  }

  ngOnInit():void{


    this.updateType = this.formBuilder.group({

      title: [''],

  });

}
update(){
  this.submitted = true


this.type={

      "id":this.id,
       "title":this.title

}

console.warn(this.type);

this.typesService.updateType(this.id,this.type).subscribe((res)=>{
  console.warn(res);

  if(res==true){
    this.matDialogRef.closeAll();
    window.location.reload();
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
