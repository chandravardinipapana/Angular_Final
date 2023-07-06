import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationBoxComponent } from './medication-box.component';

describe('MedicationBoxComponent', () => {
  let component: MedicationBoxComponent;
  let fixture: ComponentFixture<MedicationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
