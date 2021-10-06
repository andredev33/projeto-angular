import { TestBed } from '@angular/core/testing';

import { ApiTmdbService } from './api-tmdb.service';

describe('ApiTmdbService', () => {
  let service: ApiTmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
