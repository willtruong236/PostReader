import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemComponent } from './post-item.component';

describe('PostItemComponent', () => {
  let component: PostItemComponent;
  let fixture: ComponentFixture<PostItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostItemComponent],
    });
    fixture = TestBed.createComponent(PostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should upvote correctly', () => {
    expect(
      component.upVote({ id: 10, title: 'Test', body: 'Test', votes: 1 })
    ).toEqual({ id: 10, title: 'Test', body: 'Test', votes: 2 });
  });
});
