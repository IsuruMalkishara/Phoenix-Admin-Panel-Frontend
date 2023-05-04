import { Component } from '@angular/core';
import { AddModalityComponent } from '../add-modality/add-modality.component';
import { UpdateModalityComponent } from '../update-modality/update-modality.component';
import { DeleteModalityComponent } from '../delete-modality/delete-modality.component';
import { ModalitiesService } from 'src/app/services/modalities.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modality',
  templateUrl: './modality.component.html',
  styleUrls: ['./modality.component.css']
})
export class ModalityComponent {

  modalities:any;

  constructor(private modalitiesService:ModalitiesService,private router:Router,private matDialogRef:MatDialog){}

  ngOnInit(){

    this.getAllModalities();

  }
//all modalities data
getAllModalities(){
this.modalitiesService.getModality().subscribe((res)=>{
  console.warn(res);
this.modalities=res;
})
  }

  //delete modality
deleteModality(id:any){
  this.openDeleteDialogBox(id);
}

openDeleteDialogBox(id:any){
  this.matDialogRef.open(DeleteModalityComponent,{
    data:{
      id:id
    }
  });
}

//update modality
updateModality(id:any,title:any){
  this.openUpdateDialogBox(id,title);
}

openUpdateDialogBox(id:any,title:any){
  this.matDialogRef.open(UpdateModalityComponent,{
    data:{
      id:id,
      title:title
    }
  });
}

//add modality
addModality(){
  this.openaddDialogBox();
}

openaddDialogBox(){
  this.matDialogRef.open(AddModalityComponent);
}
}

