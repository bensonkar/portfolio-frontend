import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'sb-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  otpForm!: FormGroup;
  inValidOtp = false;
  loading = false;

  constructor(private fb: FormBuilder,
     protected api: ApiService<any>, 
     protected route: Router, 
     private notify: NotifyService,) { }

  ngOnInit(): void {
     if (!localStorage.getItem('reload')) { 
      localStorage.setItem('reload', 'no reload'); 
      location.reload(); 
    } else {
      localStorage.removeItem('reload'); 
    }
    this.otpForm = this.fb.group({
      otp: ['', Validators.required]
    });
  }

  verify(form: NgForm) {
    this.loading = true;
    this.api.postToken('api/v1/verify-otp', this.otpForm.value).subscribe((response: any) => {
      if (response.code === 200) {
        this.route.navigate(['dashboard']);
        localStorage.setItem('isLoggedIn', 'true');
        this.api.getToken('api/v1/user-data').subscribe((response: any) => {
          localStorage.setItem('fullName', response.user.name);
        });
        this.notify.showNotification(response.message!);
      } else {
        this.loading = false;
        this.notify.showNotification(response.message!);
      }
    }, (error: any) => {
      this.loading = false;
      this.notify.showNotification(error.error.error_description);
      console.log(error.error);
    });
  }
  resend(form: NgForm) {
    this.api.getToken('api/v1/resend-otp').subscribe(response => {
      if (response.code === 200) {
        this.notify.showNotification(response.message!);
      } else {
        this.notify.showNotification(response.message!);
      }
    }, (error: any) => {
      console.log(error.error);
      
      // this.notify.showNotification(error.error.message);
    });
  }

}
