import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-leader-board',
  standalone: false,
  
  templateUrl: './leader-board.component.html',
  styleUrl: './leader-board.component.scss'
})
export class LeaderBoardComponent {
  menuItems: string[] = ['ACTIVITIES_AND_POINTS', 'BADGE_POINTS'];
  activeIndex:number = 0; 
  displayShareDialog:boolean =false;
  currentLang: string='';

  constructor(public translate:TranslateService){
    this.currentLang = localStorage.getItem("currentLang") || 'en';
  }
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
