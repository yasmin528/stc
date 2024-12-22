import { Component } from '@angular/core';

@Component({
  selector: 'app-activities-and-points',
  standalone: false,
  
  templateUrl: './activities-and-points.component.html',
  styleUrl: './activities-and-points.component.scss'
})
export class ActivitiesAndPointsComponent {
  pointsArray:{ activity: string, points: number }[] = [
    { activity: 'Ask a Question', points: 100 },
    { activity: 'Submit a Survey', points: 200 },
    { activity: 'Follow a New Member', points: 40 },
    { activity: 'Answer a Question', points: 80 },
    { activity: 'First Login', points: 55 },
    { activity: 'Add Feedback/Idea', points: 17 },
    { activity: 'Reply an Answer', points: 20 },
    { activity: 'React on Answer/Reply', points: 15 }
  ];
}
