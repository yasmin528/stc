import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-decline-invitation',
  standalone: false,
  
  templateUrl: './decline-invitation.component.html',
  styleUrl: './decline-invitation.component.scss'
})
export class DeclineInvitationComponent implements OnInit{
  displayDeclineDialog:boolean = false;
  constructor(private location: Location) {}

  ngOnInit(): void {
    const isDeclined = localStorage.getItem('auth') === 'declined';
    if(!isDeclined){
      this.displayDeclineDialog = true;
    }
  }
  closeDeclineDialog(){
    this.location.back();
  }
  declineInvite(){
    localStorage.setItem('auth','declined');
    this.displayDeclineDialog = false;
  }
}
