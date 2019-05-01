import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RemindContrastViewComponent } from './view.component';

describe('RemindContrastViewComponent', () => {
  let component: RemindContrastViewComponent;
  let fixture: ComponentFixture<RemindContrastViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindContrastViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindContrastViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
