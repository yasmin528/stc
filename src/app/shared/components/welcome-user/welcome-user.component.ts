import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-user',
  standalone: false,
  
  templateUrl: './welcome-user.component.html',
  styleUrl: './welcome-user.component.scss'
})
export class WelcomeUserComponent {
  @Input() page = 'home';
}
