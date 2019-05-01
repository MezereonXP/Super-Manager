import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RemindBirthViewComponent } from './view.component';

describe('RemindBirthViewComponent', () => {
  let component: RemindBirthViewComponent;
  let fixture: ComponentFixture<RemindBirthViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindBirthViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindBirthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
