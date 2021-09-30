import { TestBed } from '@angular/core/testing';

import { MyRentalsService } from './my-rentals.service';

describe('MyRentalsService', () => {
  let service: MyRentalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyRentalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
