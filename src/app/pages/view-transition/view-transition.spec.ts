import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransition } from './view-transition';

describe('ViewTransition', () => {
  let component: ViewTransition;
  let fixture: ComponentFixture<ViewTransition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransition],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTransition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
