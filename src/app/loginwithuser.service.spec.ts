import { TestBed } from '@angular/core/testing';

import { LoginwithuserService } from './loginwithuser.service';

describe('LoginwithuserService', () => {
  let service: LoginwithuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginwithuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
