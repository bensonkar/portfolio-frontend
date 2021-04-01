import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import { NotifyService } from '@app/services/notify.service';

@Component({
  selector: 'sb-send-to-one',
  templateUrl: './send-to-one.component.html',
  styleUrls: ['./send-to-one.component.scss']
})
export class SendToOneComponent implements OnInit {
 
  forms!: FormGroup;
  relations!:Array<any>;
  loading = false;
  data: any;

  constructor(private fb: FormBuilder, private route: Router,private api : ApiService<any>,private notify: NotifyService) { }

  ngOnInit(): void {
    this.data = this.api.getter();
    this.forms = this.fb.group({
      message: ['',Validators.required],
      title: ['',Validators.required],
    });
  }

  submit() {
    this.loading = true;
    this.api.postToken('api/v1/email/send-to-one/'+ this.data.id,this.forms.value).subscribe(response =>{
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
