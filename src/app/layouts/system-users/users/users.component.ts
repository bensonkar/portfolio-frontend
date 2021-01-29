import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'sb-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dtOptions: any = {};
  persons: Array<any> = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(protected api: ApiService<any>) { }

  ngOnInit(): void {

    this.dtOptions = this.api.dataTableOptions();

    this.api.getToken('api/v1/user/all-system-users').subscribe(response => {
      this.persons = (response as any).data;
      this.dtTrigger.next();
    });
    
  }

}
