import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostListViewComponent } from './view.component';

describe('PostListViewComponent', () => {
  let component: PostListViewComponent;
  let fixture: ComponentFixture<PostListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
