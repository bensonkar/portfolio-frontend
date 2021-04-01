import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import { NotifyService } from '@app/services/notify.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'sb-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.scss']
})
export class RelationshipsComponent implements OnInit {
  dtOptions: any = {};
  relations: Array<any> = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private api: ApiService<any>,private notify: NotifyService, private route: Router) { }


  ngOnInit(): void {

    this.api.getToken('api/v1/relation/all').subscribe((response: any) => {
      this.relations = response.data;
      this.dtTrigger.next();
    });

    this.dtOptions = this.api.dataTableOptions();
  }

  refreshData() {
    this.api.getToken('api/v1/relation/all').subscribe((response: any) => {
      this.relations = response.data;
    });
  }

  delete(id: any) {
    this.api.deleteToken('api/v1/relation/delete',id).subscribe(response => {
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
      this.route.navigate(['edit-relation']);
    } catch(e) {
      throw e;
    }
    
  }

}
