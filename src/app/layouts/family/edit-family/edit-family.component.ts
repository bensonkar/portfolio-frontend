import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import { NotifyService } from '@app/services/notify.service';

@Component({
  selector: 'app-edit-family',
  templateUrl: './edit-family.component.html',
  styleUrls: ['./edit-family.component.scss']
})
export class EditFamilyComponent implements OnInit {
  forms!: FormGroup;
  relations!:Array<any>;
  data!: any;
  loading = false;

  constructor(private fb: FormBuilder, private route: Router,private api : ApiService<any>,private notify: NotifyService) { }

  ngOnInit(): void {
    this.data = this.api.getter();
    console.log('data ***************** ',this.data);
    
    this.forms = this.fb.group({
      firstName: [this.data.firstName,Validators.required],
      lastName: [this.data.lastName,Validators.required],
      email: [this.data.email,Validators.required],
      phone: [this.data.phone,Validators.required],
      relationShip: [this.data.relationShip,Validators.required],
      age: [this.data.age,Validators.required],
      gender: [this.data.gender,Validators.required],
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
    this.api.put('api/v1/family/update',this.forms.value,this.data.id).subscribe(response =>{
      this.loading = true;
      console.log(response);
      if (response.code === 200) {
        this.notify.showNotification(response.message!);
        this.route.navigate(['family']);
      } else {
        this.loading = false;
        this.notify.showNotification(response.message!);
      }
    });
  }

}
