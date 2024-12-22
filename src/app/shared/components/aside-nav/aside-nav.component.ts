import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  standalone: false,
  
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.scss'
})
export class AsideNavComponent {
  menuItems = [
    { name: 'Home', link: '' },
    { name: 'Discover Tafani', link: '' },
    { name: 'Community', link: '' },
    { name: 'Products & Services', link: '' },
    { name: 'Feedback', link: '' },
    { name: 'FAQs', link: '' },
    { name: 'Leaderboard', link: '/leaderBoard' },
  ];

  @Input() activeIndex = 0; 

  setActive(index: number) {
    this.activeIndex = index; 
  }
}
