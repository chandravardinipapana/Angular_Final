import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappointBoxComponent } from './viewappoint-box.component';

describe('ViewappointBoxComponent', () => {
  let component: ViewappointBoxComponent;
  let fixture: ComponentFixture<ViewappointBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewappointBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewappointBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
