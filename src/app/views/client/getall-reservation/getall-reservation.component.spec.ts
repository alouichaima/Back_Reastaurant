import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallReservationComponent } from './getall-reservation.component';

describe('GetallReservationComponent', () => {
  let component: GetallReservationComponent;
  let fixture: ComponentFixture<GetallReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallReservationComponent]
    });
    fixture = TestBed.createComponent(GetallReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
