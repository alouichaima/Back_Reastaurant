import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetwishlistComponent } from './getwishlist.component';

describe('GetwishlistComponent', () => {
  let component: GetwishlistComponent;
  let fixture: ComponentFixture<GetwishlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetwishlistComponent]
    });
    fixture = TestBed.createComponent(GetwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
