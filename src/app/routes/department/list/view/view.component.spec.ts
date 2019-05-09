import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentListViewComponent } from './view.component';

describe('DepartmentListViewComponent', () => {
  let component: DepartmentListViewComponent;
  let fixture: ComponentFixture<DepartmentListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
