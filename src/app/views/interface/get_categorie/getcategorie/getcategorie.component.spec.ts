import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcategorieComponent } from './getcategorie.component';

describe('GetcategorieComponent', () => {
  let component: GetcategorieComponent;
  let fixture: ComponentFixture<GetcategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetcategorieComponent]
    });
    fixture = TestBed.createComponent(GetcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
