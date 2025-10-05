import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongCard } from './long-card';

describe('LongCard', () => {
  let component: LongCard;
  let fixture: ComponentFixture<LongCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
