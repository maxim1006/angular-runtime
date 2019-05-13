import { TestBed } from '@angular/core/testing';

import { LibraryTemplateService } from './library-template.service';

describe('LibraryTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryTemplateService = TestBed.get(LibraryTemplateService);
    expect(service).toBeTruthy();
  });
});
