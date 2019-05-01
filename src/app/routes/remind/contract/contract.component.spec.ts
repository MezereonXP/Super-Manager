import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RemindContractComponent } from './contract.component';

describe('RemindContrastComponent', () => {
  let component: RemindContractComponent;
  let fixture: ComponentFixture<RemindContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
