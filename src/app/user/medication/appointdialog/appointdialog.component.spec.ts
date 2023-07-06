import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointdialogComponent } from './appointdialog.component';

describe('AppointdialogComponent', () => {
  let component: AppointdialogComponent;
  let fixture: ComponentFixture<AppointdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
