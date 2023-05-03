import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { Routes ,RouterModule} from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PopupComponent } from './components/popup/popup.component';
import { UnsuccessPopupComponent } from './components/unsuccess-popup/unsuccess-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatBadgeModule } from '@angular/material/badge';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { ShowVacancyComponent } from './components/show-vacancy/show-vacancy.component';
import { WarningPopupComponent } from './components/warning-popup/warning-popup.component';
import { EditVacancyDataComponent } from './components/edit-vacancy-data/edit-vacancy-data.component';
import { EmployerComponent } from './components/employer/employer.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { EditEmployerComponent } from './components/edit-employer/edit-employer.component';
import { EmployersVacancyComponent } from './components/employers-vacancy/employers-vacancy.component';
import { RequestsComponent } from './components/requests/requests.component';
import { DeleteEmployerComponent } from './components/delete-employer/delete-employer.component';
import { DeleteRequestComponent } from './components/delete-request/delete-request.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { ViewJobseekerComponent } from './components/view-jobseeker/view-jobseeker.component';
import { DeleteJobseekerComponent } from './components/delete-jobseeker/delete-jobseeker.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { DeleteAdminComponent } from './components/delete-admin/delete-admin.component';
import { JobCategoryComponent } from './components/job-category/job-category.component';
import { AddJobTypeComponent } from './components/add-job-type/add-job-type.component';
import { UpdateJobTypeComponent } from './components/update-job-type/update-job-type.component';
import { DeleteJobTypeComponent } from './components/delete-job-type/delete-job-type.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { AddJobCategoryComponent } from './components/add-job-category/add-job-category.component';
import { DeleteJobCategoryComponent } from './components/delete-job-category/delete-job-category.component';


const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children: [
    { path: 'vacancy', component: VacancyComponent },
    { path: 'vacancy/:id', component: ShowVacancyComponent},
    { path: 'vacancy/:id/edit', component: EditVacancyDataComponent},
    { path: 'vacancy/:id/request', component: RequestsComponent},
    { path: 'employer', component: EmployerComponent},
    { path: 'employer/:id/edit', component: EditEmployerComponent},
    { path: 'employer/:id/vacancy', component: EmployersVacancyComponent},
    { path: 'employer/:id/add', component: PostJobComponent},
    { path: 'jobseeker', component: JobSeekerComponent},
    { path: 'jobseeker/:id', component: ViewJobseekerComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'admin/add', component: AddAdminComponent},
    { path: 'admin/:id/edit', component: EditAdminComponent},
    { path: 'category', component: JobCategoryComponent},



  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PopupComponent,
    UnsuccessPopupComponent,
    DashboardComponent,
    VacancyComponent,
    ShowVacancyComponent,
    WarningPopupComponent,
    EditVacancyDataComponent,
    EmployerComponent,
    JobSeekerComponent,
    EditEmployerComponent,
    EmployersVacancyComponent,
    RequestsComponent,
    DeleteEmployerComponent,
    DeleteRequestComponent,
    PostJobComponent,
    ViewJobseekerComponent,
    DeleteJobseekerComponent,
    AddAdminComponent,
    AdminComponent,
    EditAdminComponent,
    DeleteAdminComponent,
    JobCategoryComponent,
    AddJobTypeComponent,
    UpdateJobTypeComponent,
    DeleteJobTypeComponent,
    UpdateCategoryComponent,
    AddJobCategoryComponent,
    DeleteJobCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    NgxPaginationModule,
    MatTableModule,
    AngularEditorModule,
    MatFormFieldModule,
    MatBadgeModule,
    PdfViewerModule

  ],
  exports:[RouterModule,MatSidenavModule,MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
