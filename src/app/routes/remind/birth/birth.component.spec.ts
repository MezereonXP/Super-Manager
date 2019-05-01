import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RemindBirthComponent } from './birth.component';

describe('RemindBirthComponent', () => {
  let component: RemindBirthComponent;
  let fixture: ComponentFixture<RemindBirthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindBirthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
