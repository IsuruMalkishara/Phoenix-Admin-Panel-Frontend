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
import { PopupComponent } from './components/popup/popup.component';
import { UnsuccessPopupComponent } from './components/unsuccess-popup/unsuccess-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';

const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children: [
    { path: '', component: VacancyComponent },


  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PopupComponent,
    UnsuccessPopupComponent,
    DashboardComponent,
    VacancyComponent
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
    MatTableModule

  ],
  exports:[RouterModule,MatSidenavModule,MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
