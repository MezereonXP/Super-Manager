import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RemindBirthEditComponent } from './edit.component';

describe('RemindBirthEditComponent', () => {
  let component: RemindBirthEditComponent;
  let fixture: ComponentFixture<RemindBirthEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindBirthEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindBirthEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
