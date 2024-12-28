import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from '../../../../core/services/latest-news.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-latest-news',
  standalone: false,
  
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent implements OnInit{
  constructor(private latestNewsService : LatestNewsService,public translate:TranslateService){}
  ngOnInit(): void {
    this.latestNewsService.getLatestNews().subscribe({
      next : news =>{
        console.log(news);
      },
      error : err =>{
        console.log(err);
      }
    })
  }
}
