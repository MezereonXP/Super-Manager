import { NzMessageService } from 'ng-zorro-antd';
import { PostListEditComponent } from './edit/edit.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
})
export class PostListComponent implements OnInit {
  url = `http://47.93.11.200:8800/api/getAllPost`;

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
    { title: '岗位名称', index: 'name' },
    { title: '所属部门ID', type: 'number', index: 'departmentid' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
        {   
          text: '编辑', 
          type: 'static', 
          click: (item: any)=>{ 
              this.modal.create(PostListEditComponent, {record:{id: item.id}})
              .subscribe(res=>this.st.reload())
            }
        },
        {
          icon: 'delete',
          type: 'del',
          click: (record, modal, comp) => {
            this.http.get("http://47.93.11.200:8800/api/deletePostById", {
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
      .createStatic(PostListEditComponent, { i:{ id:0 },record: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
