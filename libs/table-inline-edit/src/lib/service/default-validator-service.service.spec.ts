import { TestBed } from '@angular/core/testing';

import { DefaultValidatorService } from './default-validator-service.service';

describe('DefaultValidatorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultValidatorService = TestBed.get(DefaultValidatorService);
    expect(service).toBeTruthy();
  });
});
