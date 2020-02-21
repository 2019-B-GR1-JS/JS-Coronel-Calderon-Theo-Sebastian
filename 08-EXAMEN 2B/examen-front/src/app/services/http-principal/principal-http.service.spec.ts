import { TestBed } from '@angular/core/testing';

import { PrincipalHttpService } from './principal-http.service';

describe('PrincipalHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service = TestBed.get(PrincipalHttpService);
    expect(service).toBeTruthy();
  });
});
