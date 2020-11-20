import { OnInit } from '@angular/core';

import { UIService } from './ui-service';

export abstract class UIComponent<VIEW_MODEL> implements OnInit{

    /** Each components needs to inject (at least) it's UI service */
    constructor(private uiService: UIService<VIEW_MODEL>) {
    }

    /** We forward the init, just as a convenience */
    ngOnInit(): void {
        this.uiService.ngOnInit();
    }

    /**
     * Remember that we want to use the same instance of the view-model
     * so we get & set it here via the UI service
     */
    get model(): VIEW_MODEL {
        return this.uiService.model;
    }

    set model(_model: VIEW_MODEL) {
        this.uiService.model = _model;
    }
}