import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentListEditComponent } from './edit.component';

describe('DepartmentListEditComponent', () => {
  let component: DepartmentListEditComponent;
  let fixture: ComponentFixture<DepartmentListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
