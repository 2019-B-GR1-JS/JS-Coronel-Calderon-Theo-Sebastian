import { TestBed } from '@angular/core/testing';

import { JuegoHttpService } from './book-http.service';

describe('BookHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JuegoHttpService = TestBed.get(JuegoHttpService);
    expect(service).toBeTruthy();
  });
});
