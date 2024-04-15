import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchefComponent } from './editchef.component';

describe('EditchefComponent', () => {
  let component: EditchefComponent;
  let fixture: ComponentFixture<EditchefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditchefComponent]
    });
    fixture = TestBed.createComponent(EditchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
