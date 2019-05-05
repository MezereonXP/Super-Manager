import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'app-judge-list-edit',
  templateUrl: './edit.component.html',
})
export class JudgeListEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      id: { type: 'string', title: '编号' },
      status: { type: 'number', title: '状态', maxLength: 15 },
      operate: { type: 'number', title: '操作' },
      reason: { type: 'string', title: '原因' },
      operatorid: { type: 'number', title: '操作者ID'},
      createtime: { type: 'number', title: '创建时间', format: 'date' }
    },
    required: ['status', 'operate', 'reason', 'operatorid'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $reason: {
      widget: 'textarea',
      grid: { span: 24 },
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
    this.http.get(`http://47.93.11.200:8800/api/getAllRewardpunish?page=1&size=1&id=${this.record.id}`).subscribe(res => (this.i = res['data'][0]));
  }

  save(value: any) {
    if (this.record.id === 0) {
      value.id = null;
      this.http.post(`http://47.93.11.200:8800/api/addRewardpunish`, value).subscribe(res => {
        this.msgSrv.success('添加成功');
        this.modal.close(true);
      });
    } else {
      this.http.post(`http://47.93.11.200:8800/api/reviseRewardpunish?id=${this.record.id}`, value).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }
  }

  close() {
    this.modal.destroy();
  }
}
