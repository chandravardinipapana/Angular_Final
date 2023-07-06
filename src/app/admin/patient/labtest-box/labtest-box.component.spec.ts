import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestBoxComponent } from './labtest-box.component';

describe('LabtestBoxComponent', () => {
  let component: LabtestBoxComponent;
  let fixture: ComponentFixture<LabtestBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtestBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
