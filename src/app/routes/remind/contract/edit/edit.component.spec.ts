import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RemindContrastEditComponent } from './edit.component';

describe('RemindContrastEditComponent', () => {
  let component: RemindContrastEditComponent;
  let fixture: ComponentFixture<RemindContrastEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindContrastEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindContrastEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
