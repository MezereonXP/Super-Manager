import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-list-edit',
  templateUrl: './edit.component.html',
})
export class EmployeeListEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      id: { type: 'string', title: '编号' },
      name: { type: 'string', title: '姓名', maxLength: 15 },
      sex: { type: 'string', title: '性别' },
      age: { type: 'number', title: '年龄' },
      idcard: { type: 'string', title: '身份证号'},
      address: { type: 'string', title: '地址'},
      telephone: { type: 'string', title: '联系电话' },
      entrytime: { type: 'string', title: '合同时间', format: 'date' },
      level: { type: 'number', title: '等级' },
      salary: { type: 'number', title: '工资' },
      createtime: { type: 'number', title: '创建时间', format: 'date' }
    },
    required: ['id', 'name', 'sex', 'createtime'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $id: {
      widget: 'text'
    },
    $name: {
      widget: 'string',
    },
    // $description: {
    //   widget: 'textarea',
    //   grid: { span: 24 },
    // },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    if (this.record.id > 0)
    this.http.get(`http://47.93.11.200:8800/api/getAllEmployee?page=1&size=1&id=${this.record.id}`).subscribe(res => (this.i = res['data'][0]));
  }

  save(value: any) {
    if (this.record.id === 0) {
      value.id = null;
      this.http.post(`http://47.93.11.200:8800/api/addEmployee`, value).subscribe(res => {
        this.msgSrv.success('添加成功');
        this.modal.close(true);
      });
    } else {
      this.http.post(`http://47.93.11.200:8800/api/reviseEmployee?id=${this.record.id}`, value).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }

  }

  close() {
    this.modal.destroy();
  }
}
