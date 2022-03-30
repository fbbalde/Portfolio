import { TestBed } from '@angular/core/testing';

import { SofSkillsService } from './sof-skills.service';

describe('SofSkillsService', () => {
  let service: SofSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SofSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
