import { Subscription } from 'rxjs';

import { Injectable } from '@angular/core';

import { UIService } from '../../abstract/ui-service';
import { IHeroUIService } from '../hero.comp.ui-service.intf';
import { HeroViewModel } from '../hero.comp.view-model';

/**
 * And this is where all of the business logic will go.
 * We can further inject root services, or any other services
 * that we might need.
 */
@Injectable()
export class SupermanHeroUiService extends UIService<HeroViewModel> implements IHeroUIService {

    private canFlySubscription: Subscription;

    constructor() {
        super(new HeroViewModel());
    }

    ngOnInit(): void {
        /** Set some default values on our view-model */
        this.model.name = 'Superman';
        this.model.canFly = true;

        this.canFlySubscription = this.model.canFlyChanged.subscribe((newValue: boolean) => console.log('Superman canFly has changed to ' + newValue));
    }

    onDestroy(): void {
        this.canFlySubscription.unsubscribe();
        this.model = null;
    }

    cutWings(): void {
        this.model.canFly = false;
    }

    makeHimFly(): void {
        this.model.canFly = true;
    }
}