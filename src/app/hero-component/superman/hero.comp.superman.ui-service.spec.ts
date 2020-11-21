import { TestBed } from '@angular/core/testing';

import { SupermanHeroUiService } from './hero.comp.superman.ui-service';

describe('Hero UI Service test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SupermanHeroUiService]
        });
    });

    it('should default to Superman', () => {
        const service: SupermanHeroUiService = TestBed.get(SupermanHeroUiService);

        expect(service).toBeTruthy();
        expect(service.model).toBeTruthy();

        service.ngOnInit();
        expect(service.model.name.endsWith('Superman')).toBeTruthy();
    });
});