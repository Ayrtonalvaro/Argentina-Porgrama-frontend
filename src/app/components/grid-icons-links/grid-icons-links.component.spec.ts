import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridIconsLinksComponent } from './grid-icons-links.component';

describe('GridIconsLinksComponent', () => {
  let component: GridIconsLinksComponent;
  let fixture: ComponentFixture<GridIconsLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridIconsLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridIconsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
