import { TestBed } from '@angular/core/testing';
import { EditchildService } from './editchild.service';
describe('EditchildService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EditchildService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=editchild.service.spec.js.map