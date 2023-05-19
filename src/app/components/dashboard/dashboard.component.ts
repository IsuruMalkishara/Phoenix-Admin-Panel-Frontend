import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userId:any;
  userType:any;
  visible:boolean=false;
  profilePicture:any;
  userName:any;
  result:any;
  constructor(private adminService:AdminService,private router: Router){}

  ngOnInit(){
  this.userId=sessionStorage.getItem('userId');
  this.userType=sessionStorage.getItem('userType');
  if(this.userType.includes('Super Admin')){
    console.warn("Super Admin");
    this.visible=true;
  }else{
    console.warn("Admin");
  }
    this.getAdminData();

  }

  getAdminData(){
this.adminService.getAdminDataById(this.userId).subscribe((res)=>{
  this.result=res;
  console.warn(this.result);
  this.profilePicture=this.result.profilePicture;
  this.userName=this.result.userName;

})
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("");
  }

  edit(){
    this.router.navigateByUrl("dashboard/admin/"+this.userId+"/edit");
  }
}
