import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { AuthGuardLogin } from './authorization/auth-guard-login.guard';
import { HomeComponent } from './Home/home/home.component';
import { homeGuard } from './Home/home.guard';
import { LeaderBoardComponent } from './Home/leader-board/leader-board.component';

const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent,canActivate: [AuthGuardLogin]},
  { path: 'home', component: HomeComponent, canActivate:[homeGuard]},
  {path:'leaderBoard' , component:LeaderBoardComponent,canActivate:[homeGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
