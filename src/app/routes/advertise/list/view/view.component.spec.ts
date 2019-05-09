import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertiseListViewComponent } from './view.component';

describe('AdvertiseListViewComponent', () => {
  let component: AdvertiseListViewComponent;
  let fixture: ComponentFixture<AdvertiseListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
