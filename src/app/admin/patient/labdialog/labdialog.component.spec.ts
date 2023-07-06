import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabdialogComponent } from './labdialog.component';

describe('LabdialogComponent', () => {
  let component: LabdialogComponent;
  let fixture: ComponentFixture<LabdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
