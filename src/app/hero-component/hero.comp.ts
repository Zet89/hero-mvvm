import { Component, Inject, OnDestroy } from '@angular/core';

import { UIComponent } from '../abstract/ui-component';
import {
    HERO_UI_SERVICE_TOKEN, heroUIServiceFactory, IHeroUIService
} from './hero.comp.ui-service.intf';
import { HeroViewModel } from './hero.comp.view-model';

/**
 * With the exception of the extension and the injection of our ui-service,
 * this remains a classical Angular component class
 */
@Component({
    selector: 'hero',
    templateUrl: './hero.comp.html',
    styleUrls: ['./hero.comp.scss'],
    providers: [
        { provide: HERO_UI_SERVICE_TOKEN, useFactory: heroUIServiceFactory, deps: [] }
    ]
})
export class HeroComponent extends UIComponent<HeroViewModel> implements OnDestroy {

    constructor(@Inject(HERO_UI_SERVICE_TOKEN) private heroService: IHeroUIService) {
        super(heroService);
    }

    ngOnDestroy(): void {
        this.heroService.onDestroy();
    }
}