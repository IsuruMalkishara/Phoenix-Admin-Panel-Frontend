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
  profilePicture:any;
  userName:any;
  result:any;
  constructor(private adminService:AdminService,private router: Router){}

  ngOnInit(){
  this.userId=sessionStorage.getItem('userId');
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
}
