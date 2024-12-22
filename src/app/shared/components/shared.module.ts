import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AsideNavComponent,
    WelcomeUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AsideNavComponent,
    WelcomeUserComponent,
    CommonModule
  ]
})
export class SharedModule { }
