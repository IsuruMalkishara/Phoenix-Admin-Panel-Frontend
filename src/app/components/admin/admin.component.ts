import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { DeleteAdminComponent } from '../delete-admin/delete-admin.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  allAdminData:any;


  constructor(private adminService:AdminService,private router:Router,private matDialogRef:MatDialog){}

  ngOnInit(){

    this.getAllAdmins();

  }
//all admin data
  getAllAdmins(){
this.adminService.getAllAdmins().subscribe((res)=>{
  console.warn(res);
this.allAdminData=res;
})
  }

//view employer
editAdmin(id:any){
  this.router.navigateByUrl("dashboard/admin/"+id+"/edit");
}

//delete employer
deleteAdmin(id:any){
  this.openDialogBox(id);
}

openDialogBox(id:any){
  this.matDialogRef.open(DeleteAdminComponent,{
    data:{
      id:id
    }
  });
}

addAdmin(){
  this.router.navigateByUrl("dashboard/admin/add");
}

}
