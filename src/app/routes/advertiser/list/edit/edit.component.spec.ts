import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertiserListEditComponent } from './edit.component';

describe('AdvertiserListEditComponent', () => {
  let component: AdvertiserListEditComponent;
  let fixture: ComponentFixture<AdvertiserListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiserListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
