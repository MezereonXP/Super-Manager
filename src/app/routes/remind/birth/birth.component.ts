import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-remind-birth',
  templateUrl: './birth.component.html',
})
export class RemindBirthComponent implements OnInit {
  url = `http://47.93.11.200:8800/api/getEmployeeBirth`;
  // params = {page: 1, size: 20}
  reqRename = { pi:'page', ps:'size'};
  resRename = { list:'data'}

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
    // { title: '头像', type:'img', width:'50px', index:'imgSrc'},
    { title: '姓名', index: 'name' },
    { title: '性别',  index: 'sex' },
    { title: '年龄', type:'number', index: 'age'},
    { title: '入职时间', type: 'date', index: 'createtime' },
    {
      title: '',
      buttons: [
        {   text: '发送提醒', 
            click: (record, modal, comp)=>{
                this.http.get("http://47.93.11.200:8800/api/sendBirthEmail", {
                  id: record.id
                }).subscribe(res => {
                  if(res['status']){
                    this.message.success(`成功发送【${record.name}】`);
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
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

}
