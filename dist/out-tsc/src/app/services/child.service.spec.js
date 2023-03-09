import { TestBed } from '@angular/core/testing';
import { ChildService } from './child.service';
describe('ChildService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ChildService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=child.service.spec.js.map