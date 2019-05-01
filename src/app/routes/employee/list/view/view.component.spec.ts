import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeListViewComponent } from './view.component';

describe('EmployeeListViewComponent', () => {
  let component: EmployeeListViewComponent;
  let fixture: ComponentFixture<EmployeeListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
