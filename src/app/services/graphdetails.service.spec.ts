import { TestBed, inject } from '@angular/core/testing';

import { GraphdetailsService } from './graphdetails.service';

describe('GraphdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphdetailsService]
    });
  });

  it('should be created', inject([GraphdetailsService], (service: GraphdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
