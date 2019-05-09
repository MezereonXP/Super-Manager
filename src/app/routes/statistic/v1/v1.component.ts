import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './v1.component.html',
})
export class StatisticV1Component implements OnInit {
  todoData: any[] = [
    {
      completed: true,
      avatar: '1',
      name: '苏先生',
      content: `请告诉我，我应该说点什么好？`,
    },
    {
      completed: false,
      avatar: '2',
      name: 'はなさき',
      content: `ハルカソラトキヘダツヒカリ`,
    },
    {
      completed: false,
      avatar: '3',
      name: 'cipchk',
      content: `this world was never meant for one as beautiful as you.`,
    },
    {
      completed: false,
      avatar: '4',
      name: 'Kent',
      content: `my heart is beating with hers`,
    },
    {
      completed: false,
      avatar: '5',
      name: 'Are you',
      content: `They always said that I love beautiful girl than my friends`,
    },
    {
      completed: false,
      avatar: '6',
      name: 'Forever',
      content: `Walking through green fields ，sunshine in my eyes.`,
    },
  ];

  webSite: any[];
  salesData: any[];
  employeeData: any[];
  offlineChartData: any[];
  employeeCount = 0;
  cvDeliverTime = 0;
  averagePay = 0;
  averageAge = 0;

  constructor(private http: _HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get('http://47.93.11.200:8800/api/getStatics').subscribe((res: any) => {
      this.employeeCount = res.data.employeeAmount;
      this.cvDeliverTime = res.data.cvDeliverTime;
      this.averagePay = res.data.averagePay;
      this.averageAge = res.data.averageAge;
      const sales: any[] = [];
      const employee: any[] = [];
      for(let i=0;i<res.data.departmentScoreList.length;i+=1) {
        sales.push({
          x: res.data.departmentScoreList[i].name,
          y: res.data.departmentScoreList[i].score,
        });
      }
      for(let i=0;i<res.data.employeeAbilities.length;i+=1) {
        employee.push({
          x: res.data.employeeAbilities[i].name,
          y: res.data.employeeAbilities[i].score,
        });
      }
      // this.webSite = res.visitData.slice(0, 10);
      this.salesData = sales;
      this.employeeData = employee;
      // this.offlineChartData = res.offlineChartData;
      this.cdr.detectChanges();
    });
  }
}
