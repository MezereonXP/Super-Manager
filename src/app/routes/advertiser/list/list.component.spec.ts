import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertiserListComponent } from './list.component';

describe('AdvertiserListComponent', () => {
  let component: AdvertiserListComponent;
  let fixture: ComponentFixture<AdvertiserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
