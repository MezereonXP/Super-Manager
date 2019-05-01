import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssessmentListEditComponent } from './edit.component';

describe('AssessmentListEditComponent', () => {
  let component: AssessmentListEditComponent;
  let fixture: ComponentFixture<AssessmentListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
