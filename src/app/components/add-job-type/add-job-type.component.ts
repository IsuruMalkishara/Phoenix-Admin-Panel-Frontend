import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TypesService } from 'src/app/services/types.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-add-job-type',
  templateUrl: './add-job-type.component.html',
  styleUrls: ['./add-job-type.component.css']
})
export class AddJobTypeComponent {

  addType!:FormGroup;
  submitted=false;

  type:any;
  id:any;
  title:any;

  constructor(private typeService:TypesService,private matDialogRef:MatDialog,private route:ActivatedRoute,private router: Router,private formBuilder:FormBuilder){}

  ngOnInit():void{


    this.addType = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],

  });

}
save(){
  this.submitted = true

  if(this.addType.invalid){
    return
  }else{
this.type={

      "id":this.id,
       "title":this.title

}

console.warn(this.type);

this.typeService.addType(this.type).subscribe((res)=>{
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


