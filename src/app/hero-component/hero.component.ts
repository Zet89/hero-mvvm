import { Component } from '@angular/core';

import { UIComponent } from '../abstract/ui-component';
import { HeroUiService } from './hero.component.ui-service';
import { HeroViewModel } from './hero.component.view-model';

/**
 * With the exception of the extension and the injection of our ui-service,
 * this remains a classical Angular component class
 */
@Component({
    selector: 'hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    providers: [HeroUiService]
})
export class HeroComponent extends UIComponent<HeroViewModel>{

    constructor(uiService: HeroUiService) {
        super(uiService);
    }
}