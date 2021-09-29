import { TestBed } from '@angular/core/testing';

import { MyReservationsService } from './my-reservations.service';

describe('MyReservationsService', () => {
  let service: MyReservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyReservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
