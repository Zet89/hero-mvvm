import { Injectable } from '@angular/core';

import { UIService } from '../abstract/ui-service';
import { HeroViewModel } from './hero.component.view-model';

/**
 * And this is where all of the business logic will go.
 * We can further inject root services, or any other services
 * that we might need.
 */
@Injectable()
export class HeroUiService extends UIService<HeroViewModel>{

    ngOnInit(): void {
        /** Set some default values on our view-model */
        this.model.name = 'Superman';
        this.model.canFly = true;
    }
}