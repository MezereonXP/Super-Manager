import { NzMessageService } from 'ng-zorro-antd';
import { JudgeListViewComponent } from './view/view.component';
import { JudgeListEditComponent } from './edit/edit.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-judge-list',
  templateUrl: './list.component.html',
})
export class JudgeListComponent implements OnInit {
  url = `http://47.93.11.200:8800/api/getAllRewardpunish`;
  reqRename = { pi:'page', ps:'size'};
  resRename = { list:'data'};
  searchSchema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '员工ID', index: 'employeeid' },
    // { title: '头像', type:'img', width:'50px', index:'imgSrc'},
    {
      title: '状态',
      type: 'badge',
      index: 'status',
      badge: {
        1: { text: '惩罚', color: 'error' },
        2: { text: '奖励', color: 'success'}
      }
    },
    {
      title: '操作',
      type: 'badge',
      index: 'operate',
      badge: {
        1: { text: '工资调整', color: 'processing' },
        2: { text: '岗位调整', color: 'processing' },
        3: { text: '其他', color: 'processing'}
      }
    },
    { title: '理由', index: 'reason'},
    { title: '时间', type: 'date', index: 'createtime' },
    {
      title: '',
      buttons: [
        {   text: '查看', 
            click: (item: any)=>{ 
                    this.modal.create(JudgeListViewComponent, {record:{id: item.id}})
                      .subscribe(res=>this.st.reload())
                } 
        },
        {   text: '编辑', 
            type: 'static', 
            click: (item: any)=>{ 
                this.modal.create(JudgeListEditComponent, {record:{id: item.id}})
                .subscribe(res=>this.st.reload())
              }
        },
        {
          icon: 'delete',
          type: 'del',
          click: (record, modal, comp) => {
            this.http.get("http://47.93.11.200:8800/api/deleteRewardpunishById", {
                id: record.id
            }).subscribe(res => {
              if(res['status']){
                this.message.success(`成功删除【${record.name}】`);
                comp!.removeRow(record);
              }
            })
            
          }
        }]
      }
  ];

  constructor(private http: _HttpClient, 
              private modal: ModalHelper, 
              private message: NzMessageService) { }

  ngOnInit() { }

  add() {
    this.modal
      .createStatic(JudgeListEditComponent, { i:{ id:0 },record: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
