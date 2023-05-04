import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ModalitiesService } from 'src/app/services/modalities.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-update-modality',
  templateUrl: './update-modality.component.html',
  styleUrls: ['./update-modality.component.css']
})
export class UpdateModalityComponent {

  updateModality!:FormGroup;
  submitted=false;

  type:any;
  id:any;
  title:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private matDialogRef:MatDialog,private formBuilder:FormBuilder,private modalityService:ModalitiesService) {
    this.id = data.id;
    this.title=data.title;
  }

  ngOnInit():void{


    this.updateModality = this.formBuilder.group({

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

this.modalityService.updateModalitys(this.id,this.type).subscribe((res)=>{
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

