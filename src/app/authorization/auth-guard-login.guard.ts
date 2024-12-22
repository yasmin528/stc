import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardLogin implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('auth') === 'home';
    const isDeclined = localStorage.getItem('auth') === 'declined';

    if (isDeclined) {
      this.router.navigate(['/declined']);
      return false;  // Block navigation if the user is declined and go to decline invitation
    }else if(!isAuthenticated){
      return true;
    }else{
      this.router.navigate(['/home']);  // Redirect to home if already authenticated
      return false;
    }
  }
}
