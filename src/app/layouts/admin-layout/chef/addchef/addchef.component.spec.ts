import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchefComponent } from './addchef.component';

describe('AddchefComponent', () => {
  let component: AddchefComponent;
  let fixture: ComponentFixture<AddchefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddchefComponent]
    });
    fixture = TestBed.createComponent(AddchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
