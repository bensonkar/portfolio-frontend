import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import { NotifyService } from '@app/services/notify.service';

@Component({
  selector: 'sb-send-to-all',
  templateUrl: './send-to-all.component.html',
  styleUrls: ['./send-to-all.component.scss']
})
export class SendToAllComponent implements OnInit {
  forms!: FormGroup;
  relations!:Array<any>;
  loading = false;

  constructor(private fb: FormBuilder, private route: Router,private api : ApiService<any>,private notify: NotifyService) { }

  ngOnInit(): void {
    this.forms = this.fb.group({
      message: ['',Validators.required],
      title: ['',Validators.required],
    });
  }

  submit() {
    this.loading = true;
    this.api.postToken('api/v1/email/send-to-all',this.forms.value).subscribe(response =>{
      console.log(response);
      if (response.code === 200) {
        this.loading = false;
        this.notify.showNotification(response.message!);
        this.route.navigate(['emails']);
      } else {
        this.loading = false;
        this.notify.showNotification(response.message!);
      }
    });
  }

}
