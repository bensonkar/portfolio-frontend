import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import { NotifyService } from '@app/services/notify.service';

@Component({
  selector: 'sb-create-relation',
  templateUrl: './create-relation.component.html',
  styleUrls: ['./create-relation.component.scss']
})
export class CreateRelationComponent implements OnInit {

  
  forms!: FormGroup;
  relations!:Array<any>;
  loading = false;

  constructor(private fb: FormBuilder, private route: Router,private api : ApiService<any>,private notify: NotifyService) { }

  ngOnInit(): void {
    this.forms = this.fb.group({
      name: ['',Validators.required],
    });
    this.api.getToken('api/v1/relation/all').subscribe(response => {
      if (response.code === 200) {
        this.relations = response.data;
      } else {
        this.notify.showNotification(response.message!);
      }
    })
  }

  submit() {
    
    this.api.postToken('api/v1/relation/create',this.forms.value).subscribe(response =>{
      console.log(response);
      if (response.code === 201) {
        this.notify.showNotification(response.message!);
        this.route.navigate(['relation']);
      } else {
        this.notify.showNotification(response.message!);
      }
    });
  }

}
