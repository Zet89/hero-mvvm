import { Component } from '@angular/core';

import { UIComponent } from '../abstract/ui-component';
import { HeroUiService } from './hero.comp.superman.ui-service';
import { HeroViewModel } from './hero.comp.view-model';

/**
 * With the exception of the extension and the injection of our ui-service,
 * this remains a classical Angular component class
 */
@Component({
    selector: 'hero',
    templateUrl: './hero.comp.html',
    styleUrls: ['./hero.comp.scss'],
    providers: [HeroUiService]
})
export class HeroComponent extends UIComponent<HeroViewModel>{

    constructor(private heroService: HeroUiService) {
        super(heroService);
    }

    cutWings(): void {
        this.heroService.cutWings();
    }

    makeHimFly(): void {
        this.heroService.makeHimFly();
    }
}