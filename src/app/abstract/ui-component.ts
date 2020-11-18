import { OnInit } from '@angular/core';

import { UIService } from './ui-service';

export abstract class UIComponent<VIEW_MODEL> implements OnInit{

    constructor(private uiService: UIService<VIEW_MODEL>) {
    }

    ngOnInit(): void {
        this.uiService.ngOnInit();
    }

    get model(): VIEW_MODEL {
        return this.uiService.model;
    }

    set model(_model: VIEW_MODEL) {
        this.uiService.model = _model;
    }
}