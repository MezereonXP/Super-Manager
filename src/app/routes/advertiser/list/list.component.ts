import { NzMessageService } from 'ng-zorro-antd';
import { AdvertiserListEditComponent } from './edit/edit.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-advertiser-list',
  templateUrl: './list.component.html',
})
export class AdvertiserListComponent implements OnInit {
  url = `http://47.93.11.200:8800/api/getAllAdvertiser`;

  departMap: {[index:string]: string} = {};

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
    { title: '岗位', index: 'postid', format: (item: STData, col:STColumn)=>{ return this.departMap[item.postid]; } },
    { title: '简历ID', index: 'cvid' },
    {
      title: '状态',
      type: 'badge',
      index: 'status',
      badge: {
        0: { text: '未投简历', color: 'default'},
        1: { text: '简历待审核', color: 'processing' },
        2: { text: '简历未通过', color: 'error'},
        3: { text: '面试中', color: 'processing'},
        4: { text: '面试已通过', color: 'success'},
        5: { text: '面试未通过', color: 'error'}
      }
    },
    { title: '创建时间', type: 'date', index: 'createtime' },
    { title: '修改时间', type: 'date', index: 'revisetime' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        {   
          text: '编辑', 
          type: 'static', 
          click: (item: any)=>{ 
              this.modal.create(AdvertiserListEditComponent, {record:{id: item.id}})
              .subscribe(res=>this.st.reload())
            }
        },
        {
          icon: 'delete',
          type: 'del',
          click: (record, modal, comp) => {
            this.http.get("http://47.93.11.200:8800/api/deleteAdvertiserById", {
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

  ngOnInit() {
    this.http.get(`http://47.93.11.200:8800/api/getAllPost?page=1&size=10000`).subscribe(
      (res: any) => {
        res.data.forEach(element => {
          this.departMap[element.id+'']=element.name;
        });
      }
    )
  }

  add() {
    this.modal
      .createStatic(AdvertiserListEditComponent, { i:{ id:0 }, record: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
