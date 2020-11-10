import { TestBed } from '@angular/core/testing';

import { ApiurlServiceService } from './apiurl-service.service';

describe('ApiurlServiceService', () => {
  let service: ApiurlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiurlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
