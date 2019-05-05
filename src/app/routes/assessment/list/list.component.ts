import { NzMessageService } from 'ng-zorro-antd';
import { AssessmentListEditComponent } from './edit/edit.component';
import { AssessmentListViewComponent } from './view/view.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './list.component.html',
})
export class AssessmentListComponent implements OnInit {
  url = `http://47.93.11.200:8800/api/getAllCheckEmployee`;
  reqRename = { pi:'page', ps:'size'};
  resRename = { list:'data'};
  searchSchema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        title: '编号'
      },
      CheckEmployeetime: {
        type: 'string',
        format: 'date',
        title: '考核时间'
      }
    }
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    // { title: '头像', type:'img', width:'50px', index:'imgSrc'},
    { title: '内容', index: 'content' },
    { title: '结果',  index: 'result', type:'number' },
    { title: '考核时间', index: 'checktime', type:'date'},
    { title: '考核员工ID', index: 'checkemployeeid', type:'number'},
    { title: '创建时间', type: 'date', index: 'createtime' },
    {
      title: '',
      buttons: [
        {   text: '查看', 
            click: (item: any)=>{ 
                    this.modal.create(AssessmentListViewComponent, {record:{id: item.id}})
                      .subscribe(res=>this.st.reload())
                } 
        },
        {   text: '编辑', 
            type: 'static', 
            click: (item: any)=>{ 
                this.modal.create(AssessmentListEditComponent, {record:{id: item.id}})
                .subscribe(res=>this.st.reload())
              }
        },
        {
          icon: 'delete',
          type: 'del',
          click: (record, modal, comp) => {
            this.http.get("http://47.93.11.200:8800/api/deleteCheckEmployeeById", {
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
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}
