import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  currentLang:string = '';
  private routerSubscription!: Subscription;
  constructor(private router: Router,public translate:TranslateService) {
    this.currentLang = localStorage.getItem("currentLang") || 'en';
    this.translate.use(this.currentLang);
    const direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(localStorage.getItem("auth") === 'home'){
          this.displayMenu = true;
        }
      }
    });
  }
  changeLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
    const direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    localStorage.setItem('currentLang', this.currentLang);
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
