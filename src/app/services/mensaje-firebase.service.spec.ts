import { TestBed } from '@angular/core/testing';

import { MensajeFirebaseService } from './mensaje-firebase.service';

describe('MensajeFirebaseService', () => {
  let service: MensajeFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
