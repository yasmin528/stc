import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit ,OnDestroy{
  title = 'stc';
  displayMenu:boolean = false;
  toggleMenu:boolean = false;
  private routerSubscription!: Subscription;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(localStorage.getItem("auth") === 'home'){
          this.displayMenu = true;
        }
      }
    });
  }
  menuToggole(){
    this.toggleMenu = !this.toggleMenu;
  }
  logout() {
    localStorage.removeItem('auth');
    window.location.reload();
  } 

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
