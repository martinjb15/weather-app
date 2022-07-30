import { TestBed } from '@angular/core/testing';

import { OWAPIService } from './owapi.service';

describe('OWAPIService', () => {
  let service: OWAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OWAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
