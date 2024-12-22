import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  displayOTPDialog:boolean = false;
  displayServiceDialog:boolean = false;
  otpNum!: string;
  services:string[] = ["Fixed Lines","Mobile Lines","ADSL Data","Devices"];
  serviceSelected:string[] = [];

  isOtpValid(): boolean {
    const otpRegex = /^\d{4}$/;
    return otpRegex.test(this.otpNum);
  }
  showOTPDialog(){
    this.displayOTPDialog = true;
  }
  closeOTPDialog(){
    this.displayOTPDialog = false;
  }
  showServiceDialog(){
    if (this.isOtpValid()){ 
      this.closeOTPDialog();
      this.displayServiceDialog= true;
      localStorage.setItem('auth','otp');
    }else{
      this.otpNum = '';
    }
  }

  closeServiceDialog(){
    this.displayServiceDialog = false;
  }
}
