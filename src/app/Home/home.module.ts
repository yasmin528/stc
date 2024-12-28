import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/components/shared.module';
import { HomeComponent } from './home/home.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { ActivitiesAndPointsComponent } from '../Home/leader-board/activities-and-points/activities-and-points.component';
import { BadgePointsComponent } from '../Home/leader-board/badge-points/badge-points.component';
import { DialogModule } from 'primeng/dialog';
import { TrendComponent } from '../Home/home/trend/trend.component';
import { FollowedTopicsComponent } from '../Home/home/followed-topics/followed-topics.component';
import { LatestNewsComponent } from '../Home/home/latest-news/latest-news.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeComponent,
    LeaderBoardComponent,
    ActivitiesAndPointsComponent,
    BadgePointsComponent,
    TrendComponent,
    FollowedTopicsComponent,
    LatestNewsComponent
  ],
  imports: [
    SharedModule,
    DialogModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}