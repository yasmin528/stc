import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePointsComponent } from './badge-points.component';

describe('BadgePointsComponent', () => {
  let component: BadgePointsComponent;
  let fixture: ComponentFixture<BadgePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BadgePointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
