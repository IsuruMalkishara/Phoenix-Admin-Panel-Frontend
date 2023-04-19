import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { Routes ,RouterModule} from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { VerificationComponent } from './components/verification/verification.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PopupComponent } from './components/popup/popup.component';
import { UnsuccessPopupComponent } from './components/unsuccess-popup/unsuccess-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'verify',component:VerificationComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'signup',component:SignupComponent},
  {path:'verification',component:VerifyComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerificationComponent,
    ResetPasswordComponent,
    PopupComponent,
    UnsuccessPopupComponent,
    ForgotPasswordComponent,
    SignupComponent,
    VerifyComponent
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
    CommonModule

  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
