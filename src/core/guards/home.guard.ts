import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class homeGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('auth') === 'home';
    const isDeclined = localStorage.getItem('auth') === 'declined';
    if(isAuthenticated){
      return true;
    }else if(!isDeclined){
      this.router.navigate(['/login']);
      return false;
    }else{
      this.router.navigate(['/declined']);
      return false;
    }
  }
}
