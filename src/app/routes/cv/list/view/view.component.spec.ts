import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CvListViewComponent } from './view.component';

describe('CvListViewComponent', () => {
  let component: CvListViewComponent;
  let fixture: ComponentFixture<CvListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
