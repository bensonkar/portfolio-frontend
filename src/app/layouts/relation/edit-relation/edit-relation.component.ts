import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import { NotifyService } from '@app/services/notify.service';

@Component({
  selector: 'sb-edit-relation',
  templateUrl: './edit-relation.component.html',
  styleUrls: ['./edit-relation.component.scss']
})
export class EditRelationComponent implements OnInit {

  forms!: FormGroup;
  relations!:Array<any>;
  loading = false;
  data: any;
 constructor(private fb: FormBuilder, private route: Router,private api : ApiService<any>,private notify: NotifyService) { }

  ngOnInit(): void {
    this.data = this.api.getter();
    this.forms = this.fb.group({
      name: [this.data.name,Validators.required],
    });
  }

  submit() {
    this.loading = true;
    this.api.put('api/v1/relation/update',this.forms.value,this.data.id).subscribe(response =>{
      this.loading = true;
      console.log(response);
      if (response.code === 200) {
        this.notify.showNotification(response.message!);
        this.route.navigate(['relation']);
      } else {
        this.loading = false;
        this.notify.showNotification(response.message!);
      }
    });
  }

}
