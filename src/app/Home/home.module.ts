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
    DialogModule
  ]
})
export class HomeModule { }
