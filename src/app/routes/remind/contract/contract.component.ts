import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData, STColumnButton } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { RemindContractEditComponent } from './edit/edit.component';

@Component({
  selector: 'app-remind-contract',
  templateUrl: './contract.component.html',
})
export class RemindContractComponent implements OnInit {
  url = `http://47.93.11.200:8800/api/getExpiringContract`;

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
    { title: '入职时间', type: 'date', index: 'endtime' },
    {
      title: '状态',
      type: 'badge',
      index: 'issendemail',
      badge: {
        1: { text: '已发送', color: 'success' },
        0: { text: '未发送', color: 'default'}
      }
    },
    {
      title: '',
      buttons: [
        {   
            text: '发送提醒', 
            click: (record, modal, comp)=>{
                this.http.get("http://47.93.11.200:8800/api/sendContractEmail", {
                  id: record.id
                }).subscribe(res => {
                  if(res['status']){
                    this.message.success(`成功发送【${record.name}】`);
                    comp.reload();
                  }
                })
              },
            iif: (item: STData, btn: STColumnButton, column: STColumn)=>{
              if (item.issendemail === 1) {
                return false;
              } else {
                return true;
              }
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
      .createStatic(RemindContractEditComponent, { i:{ id:0 }, record: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
