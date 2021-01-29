import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'sb-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  dtOptions: any = {};
  roles: Array<any> = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private api: ApiService<any>) { }

  ngOnInit(): void {
    this.dtOptions = this.api.dataTableOptions();

    this.api.getToken('api/v1/roles/all-roles').subscribe(response => {
      this.roles = (response as any).data;
      this.dtTrigger.next();
    });
  }

}
