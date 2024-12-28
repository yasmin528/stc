import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menuItems = ['TREND', 'FOLLOWED_TOPICS', 'LATEST_NEWS'];
  activeIndex = 0; 
  constructor(public translate:TranslateService){}
  setActive(index: number) {
    this.activeIndex = index; 
  }
}
