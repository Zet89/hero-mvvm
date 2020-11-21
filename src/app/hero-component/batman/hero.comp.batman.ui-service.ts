import { Subscription } from 'rxjs';

import { Injectable } from '@angular/core';

import { UIService } from '../../abstract/ui-service';
import { IHeroUIService } from '../hero.comp.ui-service.intf';
import { HeroViewModel } from '../hero.comp.view-model';

@Injectable()
export class BatmanHeroUIservice extends UIService<HeroViewModel> implements IHeroUIService {

    private canFlySubscription: Subscription;

    constructor() {
        super(new HeroViewModel());
        console.log('BATMAN CONSTRUCTED');
    }

    ngOnInit(): void {
        this.model.name = 'Batman';
        this.model.canFly = false;

        this.canFlySubscription = this.model.canFlyChanged.subscribe((newValue: boolean) => console.log('Batman canFly has changed to ' + newValue));
    }

    onDestroy(): void {
        this.canFlySubscription.unsubscribe();
        this.model = null;
    }
}