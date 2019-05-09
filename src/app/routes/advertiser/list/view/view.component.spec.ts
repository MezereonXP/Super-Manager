import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertiserListViewComponent } from './view.component';

describe('AdvertiserListViewComponent', () => {
  let component: AdvertiserListViewComponent;
  let fixture: ComponentFixture<AdvertiserListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiserListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
