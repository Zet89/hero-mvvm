import { Injectable } from '@angular/core';

import { UIService } from '../abstract/ui-service';
import { HeroViewModel } from './hero.component.view-model';

@Injectable()
export class HeroUiService extends UIService<HeroViewModel>{

    ngOnInit(): void {
        this.model.name = 'Superman';
        this.model.canFly = true;
    }
}