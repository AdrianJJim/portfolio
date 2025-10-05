import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCard } from './skills-card';

describe('SkillsCard', () => {
  let component: SkillsCard;
  let fixture: ComponentFixture<SkillsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
