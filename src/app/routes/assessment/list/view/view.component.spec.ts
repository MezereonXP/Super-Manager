import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssessmentListViewComponent } from './view.component';

describe('AssessmentListViewComponent', () => {
  let component: AssessmentListViewComponent;
  let fixture: ComponentFixture<AssessmentListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
