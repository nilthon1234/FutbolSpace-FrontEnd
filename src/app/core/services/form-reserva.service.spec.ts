import { TestBed } from '@angular/core/testing';

import { FormReservaService } from './form-reserva.service';

describe('FormReservaService', () => {
  let service: FormReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
