import { TestBed, inject } from '@angular/core/testing';

import { ContactDatabaseService } from './contact-database.service';

describe('ContactDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactDatabaseService]
    });
  });

  it('should ...', inject([ContactDatabaseService], (service: ContactDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
