import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridskllsComponent } from './gridsklls.component';

describe('GridskllsComponent', () => {
  let component: GridskllsComponent;
  let fixture: ComponentFixture<GridskllsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridskllsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridskllsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
