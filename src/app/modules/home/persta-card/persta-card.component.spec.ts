import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerstaCardComponent } from './persta-card.component';

describe('PerstaCardComponent', () => {
  let component: PerstaCardComponent;
  let fixture: ComponentFixture<PerstaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerstaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerstaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
