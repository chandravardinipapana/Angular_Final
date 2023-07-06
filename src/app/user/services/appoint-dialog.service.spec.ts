import { TestBed } from '@angular/core/testing';

import { AppointDialogService } from './appoint-dialog.service';

describe('AppointDialogService', () => {
  let service: AppointDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
