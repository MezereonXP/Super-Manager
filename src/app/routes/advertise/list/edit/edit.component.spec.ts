import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertiseListEditComponent } from './edit.component';

describe('AdvertiseListEditComponent', () => {
  let component: AdvertiseListEditComponent;
  let fixture: ComponentFixture<AdvertiseListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
