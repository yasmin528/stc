import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesAndPointsComponent } from './activities-and-points.component';

describe('ActivitiesAndPointsComponent', () => {
  let component: ActivitiesAndPointsComponent;
  let fixture: ComponentFixture<ActivitiesAndPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitiesAndPointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesAndPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
