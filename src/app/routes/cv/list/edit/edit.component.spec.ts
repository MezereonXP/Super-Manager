import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CvListEditComponent } from './edit.component';

describe('CvListEditComponent', () => {
  let component: CvListEditComponent;
  let fixture: ComponentFixture<CvListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
