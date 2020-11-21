import { OnInit } from '@angular/core';

export abstract class UIService<VIEW_MODEL> implements OnInit {

    /* The view-model instance our component & html will bind to */
    model: VIEW_MODEL;

    constructor(model?: VIEW_MODEL) {
        /**
         * If a view-model is passed we use that one. If not, we assume that
         * the view-model is an interface and we want to create it here.
         */
        this.model = model ? model : <VIEW_MODEL>{};
    }

    ngOnInit(): void {
        /**
         * Overwrite this method in your implementation of the ui-service
         * and make all the needed initializations, including setting default
         * values on the view-model (if it is the case)
         */
    }
}