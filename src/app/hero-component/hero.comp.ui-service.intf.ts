import { environment } from 'src/environments/environment';

import { InjectionToken } from '@angular/core';

import { UIService } from '../abstract/ui-service';
import { BatmanHeroUIservice } from './batman/hero.comp.batman.ui-service';
import { HeroViewModel } from './hero.comp.view-model';
import { SupermanHeroUiService } from './superman/hero.comp.superman.ui-service';

export interface IHeroUIService extends UIService<HeroViewModel> {

    /**
     * We'll add this method just as an example.
     * Will be called when the component is destroyed.
     */
    onDestroy(): void;
}

/** We will use this InjectionToken in our component */
export const HERO_UI_SERVICE_TOKEN: InjectionToken<IHeroUIService> = new InjectionToken<IHeroUIService>('heroUIService');

/**
 * This method will return the right IHeroUIService instance
 * based on the environment.superhero value.
 */
export function heroUIServiceFactory(): IHeroUIService {
    if (environment.superhero.endsWith('Batman')) {
        return new BatmanHeroUIservice();
    }
    else if (environment.superhero.endsWith('Superman')) {
        return new SupermanHeroUiService();
    }
    return undefined; // This will determine the injection to throw an error if an invalid `superhero` is set
}