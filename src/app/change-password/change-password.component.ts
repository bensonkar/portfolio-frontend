import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'sb-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private api: ApiService<any>, private notify: NotifyService, private route: Router) { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    this.loading = true;
    this.api.putNoToken('api/v1/change-password-first-time', this.model).subscribe(response => {
      if (response.code === 200) {
        this.notify.showNotification(response.message!);
        this.route.navigate(['/login']);
      } else {
        this.loading = false;
        this.notify.showNotification(response.message!);
      }
    }, error => {
      this.loading = false;
      form.reset();
    });
  }

}
