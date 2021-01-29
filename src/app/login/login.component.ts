import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  invalidLogin = false;
  loading = false;



  constructor(private formBuilder: FormBuilder, private notify: NotifyService,
    private route: Router, private api: ApiService<any>) {
  }

  ngOnInit() {
    localStorage.clear();
    this.LoginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }


  login() {
    if (this.LoginForm.invalid) {
      return;
    }
    const body = new HttpParams()
      .set('username', this.LoginForm.controls.username.value)
      .set('password', this.LoginForm.controls.password.value)
      .set('grant_type', 'password');

    this.loading = true;
    this.api.login('api/v1/oauth/token', body.toString()).subscribe((response: any) => {
      
      if (response.code === 410) {
        this.route.navigate(['change-password']);
      } else if (response.code === 423) {
        this.loading = false;
        this.notify.showNotification(response.message);
      } else if (response.code === 400) {
        this.loading = false;
        this.notify.showNotification('Invalid email or password');
      } else {
        if (response.access_token.length !== 0) {
          localStorage.setItem('access_token', response.access_token);
          this.invalidLogin = false;
          this.route.navigate(['verify-otp']);
          this.notify.showNotification('Request was successful');
        } else {
          this.loading = false;
          this.notify.showNotification(response.message);
        }
      }


    }, (error: any) => {
      this.loading = false;
      console.log('***********************');
      if (error.error.message === 'User credentials have expired') {
        this.route.navigate(['change-password']);
      } else {
        this.notify.showNotification(error.error.error_description);
      }

    });
  }

}
