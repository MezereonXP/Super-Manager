import { DepartmentListEditComponent } from './edit/edit.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-department-list',
  templateUrl: './list.component.html',
})
export class DepartmentListComponent implements OnInit {
  url = `http://47.93.11.200:8800/api/getAllDepartment`;

  reqRename = { pi:'page', ps:'size'};
  resRename = { list:'data'};

  searchSchema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        title: '编号'
      },
      name: {
        type: 'string',
        title: '名称'
      }
    }
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '部门ID', index: 'id' },
    { title: '部门名称', index: 'name' },
    { title: '部门管理员ID', index: 'leadingid' },
    { title: '父部门ID', index: 'parentid' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        { text: '编辑', 
          type: 'static', 
          click: (item: any)=>{ 
            this.modal.create(DepartmentListEditComponent, { record:{id: item.id} })
            .subscribe(res=>this.st.reload())
          } 
        },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {
    this.modal
      .createStatic(DepartmentListEditComponent, { i:{ id:0 }, record: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
