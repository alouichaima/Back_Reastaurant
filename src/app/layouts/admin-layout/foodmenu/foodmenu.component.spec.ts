import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodmenuComponent } from './foodmenu.component';

describe('FoodmenuComponent', () => {
  let component: FoodmenuComponent;
  let fixture: ComponentFixture<FoodmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodmenuComponent]
    });
    fixture = TestBed.createComponent(FoodmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
