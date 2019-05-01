import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeListEditComponent } from './edit.component';

describe('EmployeeListEditComponent', () => {
  let component: EmployeeListEditComponent;
  let fixture: ComponentFixture<EmployeeListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
