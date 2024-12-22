import { Component } from '@angular/core';

@Component({
  selector: 'app-leader-board',
  standalone: false,
  
  templateUrl: './leader-board.component.html',
  styleUrl: './leader-board.component.scss'
})
export class LeaderBoardComponent {
  menuItems: string[] = ['Activities and Points', 'Badge Points'];
  activeIndex:number = 0; 
  displayShareDialog:boolean =false;

  setActive(index: number) {
    this.activeIndex = index; 
  }
  openShareDialog(){
    this.displayShareDialog = true;
  }
  closeShareDialog(){
    this.displayShareDialog = false;
  }
  shareBtn(){
    window.location.reload();
  }
}
