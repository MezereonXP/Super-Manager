import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JudgeListViewComponent } from './view.component';

describe('JudgeListViewComponent', () => {
  let component: JudgeListViewComponent;
  let fixture: ComponentFixture<JudgeListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgeListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
