import { TestBed } from '@angular/core/testing';

import { LatestNewsService } from '../../../../core/services/latest-news.service';

describe('LatestNewsService', () => {
  let service: LatestNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
