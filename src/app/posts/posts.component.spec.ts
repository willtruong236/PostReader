import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsComponent } from './posts.component';
import { PostItemComponent } from '../post-item/post-item.component';
import { CreatePostComponent } from '../create-post/create-post.component';
import { NgForm, NgModel } from '@angular/forms';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        PostsComponent,
        PostItemComponent,
        CreatePostComponent,
        NgForm,
        NgModel,
      ],
    });
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(component.title).toBe('Posts');
  });
});
