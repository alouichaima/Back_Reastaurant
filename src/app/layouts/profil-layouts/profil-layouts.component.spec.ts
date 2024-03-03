import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilLayoutsComponent } from './profil-layouts.component';

describe('ProfilLayoutsComponent', () => {
  let component: ProfilLayoutsComponent;
  let fixture: ComponentFixture<ProfilLayoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilLayoutsComponent]
    });
    fixture = TestBed.createComponent(ProfilLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
