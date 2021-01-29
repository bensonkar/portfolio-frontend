import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NotifyService } from '../../services/notify.service';

@Component({
  selector: 'sb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'System users';
  showYAxisLabel = true;
  yAxisLabel = 'Total';
  timeline = true;
  showLabels = true;
  view: any[] = [600, 400];

  colorScheme = {
    domain: ['#EF734A', '#F7B85C', '#0EADD4', '#2CACAD', '#90EE90', '#9C499F']
  };

  systemUsers = [];

  constructor(private api: ApiService<any>, private notify: NotifyService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('reload')) { 
      localStorage.setItem('reload', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('reload');
    }

    this.api.getToken('api/v1/dashboard/system-users-graph').subscribe(response => {
      if (response.code === 200) {
        this.systemUsers = response.data;
      } else {
        this.notify.showNotification(response.message!);
      }
    });
  }

}
