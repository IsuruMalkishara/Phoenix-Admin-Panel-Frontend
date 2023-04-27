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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { ShowVacancyComponent } from './components/show-vacancy/show-vacancy.component';
import { WarningPopupComponent } from './components/warning-popup/warning-popup.component';
import { EditVacancyDataComponent } from './components/edit-vacancy-data/edit-vacancy-data.component';
import { EmployerComponent } from './components/employer/employer.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { EditEmployerComponent } from './components/edit-employer/edit-employer.component';
import { DeleteEmployerComponent } from './components/delete-employer/delete-employer.component';

const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children: [
    { path: 'vacancy', component: VacancyComponent },
    { path: 'vacancy/:id', component: ShowVacancyComponent},
    { path: 'vacancy/:id/edit', component: EditVacancyDataComponent},
    { path: 'employer', component: EmployerComponent},
    { path: 'employer/:id/edit', component: EditEmployerComponent},
    { path: 'jobseeker', component: JobSeekerComponent},



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
    DeleteEmployerComponent
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
    MatFormFieldModule

  ],
  exports:[RouterModule,MatSidenavModule,MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
