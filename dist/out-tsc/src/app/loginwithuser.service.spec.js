import { TestBed } from '@angular/core/testing';
import { LoginwithuserService } from './loginwithuser.service';
describe('LoginwithuserService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoginwithuserService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=loginwithuser.service.spec.js.map