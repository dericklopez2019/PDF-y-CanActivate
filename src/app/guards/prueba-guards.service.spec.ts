import { TestBed } from '@angular/core/testing';

import { PruebaGuardsService } from './prueba-guards.service';

describe('PruebaGuardsService', () => {
  let service: PruebaGuardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaGuardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
