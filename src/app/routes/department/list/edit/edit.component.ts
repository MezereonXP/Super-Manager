import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'app-department-list-edit',
  templateUrl: './edit.component.html',
})
export class DepartmentListEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      id: { type: 'string', title: '部门ID' },
      name: { type: 'string', title: '部门名称' },
      leadingid: { type: 'number', title: '管理者ID' },
      parentid: { type: 'number', title: '父部门ID' }
    },
    required: ['id', 'name', 'leadingid', 'parentid'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $id: {
      widget: 'text'
    }
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {}

  ngOnInit(): void {
    if (this.record.id > 0)
    this.http.get(`http://47.93.11.200:8800/api/getAllDepartment?page=1&size=1&id=${this.record.id}`).subscribe(res => (this.i = res['data'][0]));
  }

  save(value: any) {
    if (this.record.id === 0) {
      value.id = null;
      this.http.post(`http://47.93.11.200:8800/api/addDepartment`, value).subscribe(res => {
        this.msgSrv.success('添加成功');
        this.modal.close(true);
      });
    } else {
      this.http.post(`http://47.93.11.200:8800/api/reviseDepartment?id=${this.record.id}`, value).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }
  }

  close() {
    this.modal.destroy();
  }
}
