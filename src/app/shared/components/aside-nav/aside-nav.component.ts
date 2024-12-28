import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aside-nav',
  standalone: false,
  
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.scss'
})
export class AsideNavComponent {
  menuItems = [
    { name: 'HOME', link: '' },
    { name: 'DISCOVER_TAFANI', link: '' },
    { name: 'COMMUNITY', link: '' },
    { name: 'PRODUCTS_SERVICES', link: '' },
    { name: 'FEEDBACK', link: '' },
    { name: 'FAQS', link: '' },
    { name: 'LEADERBOARD', link: '/leaderBoard' },
  ];
  
  constructor(public translate:TranslateService){}
  @Input() activeIndex = 0; 

  setActive(index: number) {
    this.activeIndex = index; 
  }
}
