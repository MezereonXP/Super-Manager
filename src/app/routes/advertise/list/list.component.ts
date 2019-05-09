import { NzMessageService } from 'ng-zorro-antd';
import { AdvertiseListEditComponent } from './edit/edit.component';
import { Component, OnInit, ViewChild, LOCALE_ID } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-advertise-list',
  templateUrl: './list.component.html',
})
export class AdvertiseListComponent implements OnInit {
  url = `http://47.93.11.200:8800/api/getAllAdvertise`;

  reqRename = { pi:'page', ps:'size'};
  resRename = { list:'data'};

  searchSchema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        title: '编号'
      },
      createtime: {
        type: 'string',
        format: 'date',
        title: '创建时间'
      }
    }
  };

  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '招聘内容', index: 'content', maxLength: 15 },
    { title: '负责人员ID', index: 'hrids' },
    { title: '创建时间', type: 'date', index: 'createtime' },
    { title: '修改时间', type: 'date', index: 'revisetime' },
    {
      title: '状态',
      type: 'badge',
      index: 'status',
      badge: {
        0: { text: '未开始', color: 'default'},
        1: { text: '简历接受中', color: 'processing' },
        2: { text: '停止接受简历', color: 'success'}
      }
    },
    {
      title: '',
      buttons: [
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
        {   
          text: '编辑', 
          type: 'static', 
          click: (item: any)=>{ 
              this.modal.create(AdvertiseListEditComponent, {record:{id: item.id}})
              .subscribe(res=>this.st.reload())
            }
        },
        {
          icon: 'delete',
          type: 'del',
          click: (record, modal, comp) => {
            this.http.get("http://47.93.11.200:8800/api/deleteAdvertiseById", {
                id: record.id
            }).subscribe(res => {
              if(res['status']){
                this.message.success(`成功删除【${record.name}】`);
                comp!.removeRow(record);
              }
            })
            
          }
        }
      ]
    }
  ];

  constructor(private http: _HttpClient, 
              private modal: ModalHelper,
              private message: NzMessageService) { }

  ngOnInit() { }

  add() {
    this.modal
      .createStatic(AdvertiseListEditComponent, { i:{ id:0 }, record: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
