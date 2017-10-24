import { TestBed, inject } from '@angular/core/testing';

import { RepoDetailsService } from './repo-details.service';

describe('RepoDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoDetailsService]
    });
  });

  it('should be created', inject([RepoDetailsService], (service: RepoDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
