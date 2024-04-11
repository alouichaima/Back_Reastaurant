import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmonprofilComponent } from './editmonprofil.component';

describe('EditmonprofilComponent', () => {
  let component: EditmonprofilComponent;
  let fixture: ComponentFixture<EditmonprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmonprofilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmonprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
