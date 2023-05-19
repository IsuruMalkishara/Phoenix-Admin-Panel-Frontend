import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalitiesService } from 'src/app/services/modalities.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-add-modality',
  templateUrl: './add-modality.component.html',
  styleUrls: ['./add-modality.component.css']
})
export class AddModalityComponent {

  addModality!:FormGroup;
  submitted=false;

  type:any;
  id:any;
  title:any;

  constructor(private modalityService:ModalitiesService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private formBuilder:FormBuilder){}

  ngOnInit():void{


    this.addModality = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],

  });

}
save(){
  this.submitted = true

  if(this.addModality.invalid){
    return
  }else{
this.type={

      "id":this.id,
       "title":this.title

}

console.warn(this.type);

this.modalityService.addModality(this.type).subscribe((res)=>{
  console.warn(res);

  if(res==true){
    this.matDialogRef.closeAll();
    window.location.reload();
    this.openDialog();
  }
})
  }
}

openDialog(){
  this.matDialogRef.open(PopupComponent,{
    data : {
      message : 'Successfully Updated'
    }
  });
}
}



