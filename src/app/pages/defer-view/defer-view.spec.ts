import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferView } from './defer-view';

describe('DeferView', () => {
  let component: DeferView;
  let fixture: ComponentFixture<DeferView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferView],
    }).compileComponents();

    fixture = TestBed.createComponent(DeferView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
