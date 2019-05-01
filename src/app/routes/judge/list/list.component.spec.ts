import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JudgeListComponent } from './list.component';

describe('JudgeListComponent', () => {
  let component: JudgeListComponent;
  let fixture: ComponentFixture<JudgeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
