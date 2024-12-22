import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { DeclineInvitationComponent } from './decline-invitation/decline-invitation.component';
import { PolicyGuard } from './policy/policy.guard';

@NgModule({
  declarations: [
    LoginComponent,
    PolicyComponent,
    DeclineInvitationComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    InputOtpModule,
    CheckboxModule,
    RouterModule.forChild([
      {path : 'policy' , component: PolicyComponent,canActivate:[PolicyGuard]},
      {path: 'declined', component: DeclineInvitationComponent}
    ])
  ]
})
export class AuthorizationModule { }
