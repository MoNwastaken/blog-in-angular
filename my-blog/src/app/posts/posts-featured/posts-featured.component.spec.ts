import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsFeaturedComponent } from './posts-featured.component';

describe('PostsFeaturedComponent', () => {
  let component: PostsFeaturedComponent;
  let fixture: ComponentFixture<PostsFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
