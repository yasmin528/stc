import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-activities-and-points',
  standalone: false,
  
  templateUrl: './activities-and-points.component.html',
  styleUrl: './activities-and-points.component.scss'
})
export class ActivitiesAndPointsComponent {
  
  currentLang: string='';
  pointsArray: { activity: string, points: number }[] = [
    { activity: 'ACTIVITY_ASK_QUESTION', points: 100 },
    { activity: 'ACTIVITY_SUBMIT_SURVEY', points: 200 },
    { activity: 'ACTIVITY_FOLLOW_MEMBER', points: 40 },
    { activity: 'ACTIVITY_ANSWER_QUESTION', points: 80 },
    { activity: 'ACTIVITY_FIRST_LOGIN', points: 55 },
    { activity: 'ACTIVITY_ADD_FEEDBACK', points: 17 },
    { activity: 'ACTIVITY_REPLY_ANSWER', points: 20 },
    { activity: 'ACTIVITY_REACT_ANSWER', points: 15 }
  ];

  constructor(public translate:TranslateService){
    this.currentLang = localStorage.getItem("currentLang") || 'en';
  }

  formatNumberForLocale(number: number): string {
    const locale = this.translate.currentLang === 'ar' ? 'ar-EG' : 'en-US';
    return new Intl.NumberFormat(locale).format(number);
  }
  isRTL(): boolean {
    return document.documentElement.dir === 'rtl';
  }
}
