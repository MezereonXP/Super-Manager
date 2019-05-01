import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JudgeListEditComponent } from './edit.component';

describe('JudgeListEditComponent', () => {
  let component: JudgeListEditComponent;
  let fixture: ComponentFixture<JudgeListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgeListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
