import { OnInit } from '@angular/core';

export abstract class UIService<VIEW_MODEL> implements OnInit {

    model: VIEW_MODEL;

    constructor() {
        this.model = <VIEW_MODEL>{};
    }

    ngOnInit(): void {
    }
}