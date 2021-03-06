import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-list-view',
  templateUrl: './view.component.html',
})
export class EmployeeListViewComponent implements OnInit {
  record: any = {};
  i: any;

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    public http: _HttpClient,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.http.get(`http://47.93.11.200:8800/api/getAllEmployee?page=1&size=1&id=${this.record.id}`).subscribe(res => this.i = res['data'][0]);
  }

  close() {
    this.modal.destroy();
  }

  formatDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
  }
}
