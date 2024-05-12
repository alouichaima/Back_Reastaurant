import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MescommandesComponent } from './mescommandes/mescommandes.component';

describe('MescommandesComponent', () => {
  let component: MescommandesComponent;
  let fixture: ComponentFixture<MescommandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MescommandesComponent]
    });
    fixture = TestBed.createComponent(MescommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
