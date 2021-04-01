import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import { NotifyService } from '@app/services/notify.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'sb-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  dtOptions: any = {};
  families: Array<any> = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private api: ApiService<any>,private notify: NotifyService, private route: Router) { }


  ngOnInit(): void {

    this.api.getToken('api/v1/family/all').subscribe((response: any) => {
      this.families = response.data;
      this.dtTrigger.next();
    });

    this.dtOptions = this.api.dataTableOptions();
  }

  refreshData() {
    this.api.getToken('api/v1/family/all').subscribe((response: any) => {
      this.families = response.data;
    });
  }

  delete(id: any) {
    this.api.deleteToken('api/v1/family/delete',id).subscribe(response => {
      if (response === 200) {
        this.notify.showNotification(response.message!);
        this.refreshData();
      } else {
        this.notify.showNotification(response.message!);
        this.refreshData();
      }
    });
  }

  update(data : any) {
    try {
      this.api.setter(data);
      this.route.navigate(['edit-family']);
    } catch(e) {
      throw e;
    }
    
  }


}
