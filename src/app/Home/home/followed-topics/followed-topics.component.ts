import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-followed-topics',
  standalone: false,
  
  templateUrl: './followed-topics.component.html',
  styleUrl: './followed-topics.component.scss'
})
export class FollowedTopicsComponent {
  currentLang:string='';
  constructor(public translate:TranslateService){
    this.currentLang = localStorage.getItem("currentLang") || 'en';
  }
}
