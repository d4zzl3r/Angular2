import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTComponent } from './post.component';

describe('POSTComponent', () => {
  let component: POSTComponent;
  let fixture: ComponentFixture<POSTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
