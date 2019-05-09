import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostListEditComponent } from './edit.component';

describe('PostListEditComponent', () => {
  let component: PostListEditComponent;
  let fixture: ComponentFixture<PostListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
