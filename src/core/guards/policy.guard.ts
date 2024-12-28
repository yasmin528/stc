import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PolicyGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('auth') === 'otp';
    const isDeclined = localStorage.getItem('auth') === 'declined';

    if (isDeclined) {
        this.router.navigate(['/declined']);
        return false;  // Block navigation if the user is declined and go to decline invitation
    }else if(isAuthenticated){
        return true; //redirect to policy
    }else{
        if(localStorage.getItem('auth')==='home'){
            this.router.navigate(['/home']);  // Redirect to home if already authenticated
            return false;
        }else{
            this.router.navigate(['/login']); //redirect to login
            return false;
        }
    }
  }
}