import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { ApiService } from '@app/services/api.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'sb-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  loading = false;
  model: any = {};

  constructor(private api: ApiService<any>, private notify: NotifyService) { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {

  }

}
