import { TestBed } from '@angular/core/testing';

import { BatmanHeroUIservice } from './hero.comp.batman.ui-service';

describe('Hero UI Service test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BatmanHeroUIservice]
        });
    });

    it('should default to Superman', () => {
        const service: BatmanHeroUIservice = TestBed.get(BatmanHeroUIservice);

        expect(service).toBeTruthy();
        expect(service.model).toBeTruthy();

        service.ngOnInit();
        expect(service.model.name.endsWith('Batman')).toBeTruthy();
    });
});