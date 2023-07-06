import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBoxComponent } from './patient-box.component';

describe('PatientBoxComponent', () => {
  let component: PatientBoxComponent;
  let fixture: ComponentFixture<PatientBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
