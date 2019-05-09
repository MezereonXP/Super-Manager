import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { EmployeeListEditComponent } from './edit/edit.component';
import { EmployeeListViewComponent } from './view/view.component';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
})
export class EmployeeListComponent implements OnInit {
  url = `http://47.93.11.200:8800/api/getAllEmployee`;
  // params = {page: 1, size: 20}
  reqRename = { pi:'page', ps:'size'};
  resRename = { list:'data'}
  stpage = { showSize:true, pageSizes:[2,5,10,20] }

  searchSchema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        title: '编号'
      },
      name: {
        type: 'string',
        title: '姓名'
      }
    }
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    // { title: '头像', type:'img', width:'50px', index:'imgSrc'},
    { title: '姓名', index: 'name' },
    { title: '性别',  index: 'sex' },
    { title: '年龄', type:'number', index: 'age'},
    { title: '时间', type: 'date', index: 'createtime' },
    {
      title: '',
      buttons: [
        {   text: '查看', 
            click: (item: any)=>{ 
                    this.modal.create(EmployeeListViewComponent, {record:{id: item.id}})
                      .subscribe(res=>this.st.reload())
                } 
        },
        {   text: '编辑', 
            type: 'static', 
            click: (item: any)=>{ 
                this.modal.create(EmployeeListEditComponent, {record:{id: item.id}})
                .subscribe(res=>this.st.reload())
              }
        },
        {
          icon: 'delete',
          type: 'del',
          click: (record, modal, comp) => {
            this.http.get("http://47.93.11.200:8800/api/deleteEmployeeById", {
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
    
  }

  add() {
    this.modal
      .createStatic(EmployeeListEditComponent, { i:{ id:0 }, record: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
