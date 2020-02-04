import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GETComponent } from './get.component';

describe('GETComponent', () => {
  let component: GETComponent;
  let fixture: ComponentFixture<GETComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GETComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
