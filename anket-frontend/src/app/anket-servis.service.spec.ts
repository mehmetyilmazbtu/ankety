import { TestBed } from '@angular/core/testing';

import { AnketServisService } from './anket-servis.service';

describe('AnketServisService', () => {
  let service: AnketServisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnketServisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
