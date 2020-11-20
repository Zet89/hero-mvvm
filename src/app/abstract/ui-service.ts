import { OnInit } from '@angular/core';

export abstract class UIService<VIEW_MODEL> implements OnInit {

    /* The view-model instance our component & html will bind to */
    model: VIEW_MODEL;

    constructor() {
        /** We make our view-model instantly available */
        this.model = <VIEW_MODEL>{};
    }

    ngOnInit(): void {
        /**
         * Overwrite this method in your implementation of the ui-service
         * and make all the needed initializations, including setting default
         * values on the view-model (if it is the case)
         */
    }
}