import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trend',
  standalone: false,
  
  templateUrl: './trend.component.html',
  styleUrl: './trend.component.scss'
})
export class TrendComponent {
  constructor(public translate:TranslateService){}
}
