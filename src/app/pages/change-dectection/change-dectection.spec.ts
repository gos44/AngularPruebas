import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDectection } from './change-dectection';

describe('ChangeDectection', () => {
  let component: ChangeDectection;
  let fixture: ComponentFixture<ChangeDectection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDectection],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeDectection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
