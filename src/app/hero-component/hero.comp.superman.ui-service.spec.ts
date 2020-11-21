import { TestBed } from '@angular/core/testing';

import { HeroUiService } from './hero.comp.superman.ui-service';

describe('Hero UI Service test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HeroUiService]
        });
    });

    it('should default to Superman', () => {
        const service: HeroUiService = TestBed.get(HeroUiService);

        expect(service).toBeTruthy();
        expect(service.model).toBeTruthy();

        service.ngOnInit();
        expect(service.model.name.endsWith('Superman')).toBeTruthy();
    });
});