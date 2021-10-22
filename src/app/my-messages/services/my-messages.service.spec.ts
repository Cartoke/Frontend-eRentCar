import { TestBed } from '@angular/core/testing';

import { MyMessagesService } from './my-messages.service';

describe('MyMessagesService', () => {
  let service: MyMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
