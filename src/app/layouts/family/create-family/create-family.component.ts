import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'sb-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.scss']
})
export class CreateFamilyComponent implements OnInit {

  forms!: FormGroup;
  relations!:Array<any>;
  loading = false;

  constructor(private fb: FormBuilder, private route: Router,private api : ApiService<any>,private notify: NotifyService) { }

  ngOnInit(): void {
    this.forms = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      relationShip: ['',Validators.required],
      age: [Validators.required],
      gender: ['',Validators.required],
    })
    this.api.getToken('api/v1/relation/all').subscribe(response => {
      if (response.code === 200) {
        this.relations = response.data;
      } else {
        this.notify.showNotification(response.message!);
      }
    })
  }

  submit() {
    this.loading = true;
    this.api.postToken('api/v1/family/create',this.forms.value).subscribe(response =>{
      console.log(response);
      if (response.code === 201) {
        this.loading = false;
        this.notify.showNotification(response.message!);
        this.route.navigate(['family']);
      } else {
        this.loading = false;
        this.notify.showNotification(response.message!);
      }
    });
  }

}
