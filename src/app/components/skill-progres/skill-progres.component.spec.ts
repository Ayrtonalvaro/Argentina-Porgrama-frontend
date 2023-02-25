import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillProgresComponent } from './skill-progres.component';

describe('SkillProgresComponent', () => {
  let component: SkillProgresComponent;
  let fixture: ComponentFixture<SkillProgresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillProgresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillProgresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
