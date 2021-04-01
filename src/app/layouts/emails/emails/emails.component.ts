import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import { NotifyService } from '@app/services/notify.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'sb-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  dtOptions: any = {};
  families: Array<any> = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private api: ApiService<any>, private notify: NotifyService, private route: Router) { }
  

  ngOnInit(): void {
  
    this.api.getToken('api/v1/family/all').subscribe((response: any) => {
      this.families = response.data;
      this.dtTrigger.next();
    });

    this.dtOptions = this.api.dataTableOptions();
  }

  sendToOne(data: any) {
   try {
    this.api.setter(data);
    this.route.navigate(['send-to-one'])
   } catch(e) {
     throw e;
   }
  }
}
