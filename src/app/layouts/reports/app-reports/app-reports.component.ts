import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'sb-app-reports',
  templateUrl: './app-reports.component.html',
  styleUrls: ['./app-reports.component.scss']
})
export class AppReportsComponent implements OnInit,AfterViewInit {
  dtOptions: any = {};
  logs: Array<any> = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private api: ApiService<any>) { }
  

  ngOnInit(): void {
  
    this.api.getToken('api/v1/app-logs/logs').subscribe((response: any) => {
      this.logs = response.data;
      this.dtTrigger.next();
    });

    this.dtOptions = this.api.dataTableOptions();
  }

  ngAfterViewInit(): void {
    $('.select-all-checkbox').click(function () {
      if ($(this).is(':checked')) {
          // @ts-ignore
          $($.fn.dataTable.tables(true)).DataTable().rows().select();
      } else {
          // @ts-ignore
          $($.fn.dataTable.tables(true)).DataTable().rows().deselect();
      }
  });
  }

}
