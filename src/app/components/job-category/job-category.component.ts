import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { DeleteJobCategoryComponent } from '../delete-job-category/delete-job-category.component';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
import { AddJobCategoryComponent } from '../add-job-category/add-job-category.component';

@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.css']
})
export class JobCategoryComponent {
  categories:any;

  constructor(private categoryService:CategoryService,private router:Router,private matDialogRef:MatDialog){}

  ngOnInit(){

    this.getAllCategories();

  }
//all categories data
getAllCategories(){
this.categoryService.getCategories().subscribe((res)=>{
  console.warn(res);
this.categories=res;
})
  }

  //delete category
deleteCategory(id:any){
  this.openDeleteDialogBox(id);
}

openDeleteDialogBox(id:any){
  this.matDialogRef.open(DeleteJobCategoryComponent,{
    data:{
      id:id
    }
  });
}

//update category
updateCategory(id:any,title:any){
  this.openUpdateDialogBox(id,title);
}

openUpdateDialogBox(id:any,title:any){
  this.matDialogRef.open(UpdateCategoryComponent,{
    data:{
      id:id,
      title:title
    }
  });
}

//add category
addCategory(){
  this.openaddDialogBox();
}

openaddDialogBox(){
  this.matDialogRef.open(AddJobCategoryComponent);
}
}
