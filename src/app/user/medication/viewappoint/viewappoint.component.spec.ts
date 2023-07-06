import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappointComponent } from './viewappoint.component';

describe('ViewappointComponent', () => {
  let component: ViewappointComponent;
  let fixture: ComponentFixture<ViewappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewappointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
