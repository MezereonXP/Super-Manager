import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'app-post-list-edit',
  templateUrl: './edit.component.html',
})
export class PostListEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      id: { type: 'string', title: '编号' },
      name: { type: 'string', title: '岗位名称', maxLength: 15 },
      departmentid: { type: 'number', title: '所属部门ID' }
    },
    required: ['name', 'departmentid'],
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
    this.http.get(`http://47.93.11.200:8800/api/getAllPost?page=1&size=1&id=${this.record.id}`).subscribe(res => (this.i = res['data'][0]));
  }

  save(value: any) {
    if (this.record.id === 0) {
      value.id = null;
      this.http.post(`http://47.93.11.200:8800/api/addPost`, value).subscribe(res => {
        this.msgSrv.success('添加成功');
        this.modal.close(true);
      });
    } else {
      this.http.post(`http://47.93.11.200:8800/api/revisePost?id=${this.record.id}`, value).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }
  }

  close() {
    this.modal.destroy();
  }
}
