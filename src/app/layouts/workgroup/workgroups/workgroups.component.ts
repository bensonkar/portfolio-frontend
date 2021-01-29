import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'sb-workgroups',
  templateUrl: './workgroups.component.html',
  styleUrls: ['./workgroups.component.scss']
})
export class WorkgroupsComponent implements OnInit {
  dtOptions: any = {};
  workgroups: Array<any> = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private api: ApiService<any>) { }

  ngOnInit(): void {
    this.dtOptions = this.api.dataTableOptions();

    this.api.getToken('api/v1/workgroups/all-workgroups').subscribe(response => {
      this.workgroups = (response as any).data;
      this.dtTrigger.next();
    });
  }

}
