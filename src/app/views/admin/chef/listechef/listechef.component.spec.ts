import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListechefComponent } from './listechef.component';

describe('ListechefComponent', () => {
  let component: ListechefComponent;
  let fixture: ComponentFixture<ListechefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListechefComponent]
    });
    fixture = TestBed.createComponent(ListechefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
