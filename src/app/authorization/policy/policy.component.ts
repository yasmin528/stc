import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPolicy } from './policyModel';
import { PolicyService } from './policy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: false,
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent implements OnInit,OnDestroy {
  terms: IPolicy[] = [];
  acceptFlag:boolean = false;
  constructor(private policyService : PolicyService , private router :Router){}
  
  ngOnInit(): void {
    this.policyService.getTermsPolicy().subscribe({
      next: terms =>{
        this.terms = terms;
      },
      error: err =>{
        console.log(err);
      }
    });
  }
  policyAccepted(){
    this.acceptFlag = true;
    localStorage.setItem('auth','home');
    this.router.navigate(['/']);
  }
  ngOnDestroy(): void {
    if(this.acceptFlag === false){
      this.router.navigate(['/declined']);
    }
  }
}
