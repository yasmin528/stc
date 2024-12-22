import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menuItems = ['Trend', 'Followed Topics','Latest News'];
  activeIndex = 0; 

  setActive(index: number) {
    this.activeIndex = index; 
  }
}
