import { NzMessageService } from 'ng-zorro-antd';
import { CvListEditComponent } from './edit/edit.component';
import { CvListViewComponent } from './view/view.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-cv-list',
  templateUrl: './list.component.html',
})
export class CvListComponent implements OnInit {
  url = `http://47.93.11.200:8800/api/getAllCv`;

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
        title: '创建时间',
        format: 'date'
      }
    }
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '简历ID', index: 'id' },
    { title: '简历文件地址', index: 'filesrc' },
    { title: '创建时间', type: 'date', index: 'createtime' },
    { title: '修改时间', type: 'date', index: 'revisetime' },
    {
      title: '',
      buttons: [
        {   
            text: '编辑', 
            type: 'static', 
            click: (item: any)=>{ 
                this.modal.create(CvListEditComponent, {record:{id: item.id}})
                .subscribe(res=>this.st.reload())
              }
        },
        {
          icon: 'delete',
          type: 'del',
          click: (record, modal, comp) => {
            this.http.get("http://47.93.11.200:8800/api/deleteCvById", {
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
      .createStatic(CvListEditComponent, { i:{ id:0 }, record: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
