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
      status: { type: 'number', title: '状态', maxLength: 15, minimum: 1, maximum: 2,
        enum: [
          { label: '奖励', value: 1 },
          { label: '惩罚', value: 2 },
        ],
        default: 1,
        ui: {
          widget: 'select',
        }
      },
      operate: { 
        type: 'number', title: '操作', minimum: 1, maximum: 3,
        enum: [
          { label: '薪酬调整', value: 1 },
          { label: '岗位调整', value: 2 },
          { label: '其他', value: 3 },
        ],
        default: 1,
        ui: {
          widget: 'select',
        }
      },
      reason: { type: 'string', title: '原因' },
      operatorid: { type: 'number', title: '操作者ID'},
      employeeid: { type: 'number', title: '员工ID'},
      createtime: { type: 'number', title: '创建时间', format: 'date' }
    },
    required: ['status', 'operate', 'reason', 'operatorid', 'employeeid', 'createtime'],
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
