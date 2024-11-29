import { TestBed } from '@angular/core/testing';

import { CampoFutbolService } from './campo-futbol.service';

describe('CampoFutbolService', () => {
  let service: CampoFutbolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampoFutbolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
