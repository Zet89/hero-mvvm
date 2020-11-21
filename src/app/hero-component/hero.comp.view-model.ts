import { EventEmitter } from '@angular/core';

/**
 * This is where all the fields that I need for my components state, go.
 * All of these can be bound from the html and manipulated in the ui-service(s)
 * as well as the component class.
 */
export class HeroViewModel {
    nameChanged: EventEmitter<string> = new EventEmitter<string>();
    canFlyChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    private _name: string;
    private _canFly: boolean;

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
        this.nameChanged.emit(value);
    }

    public get canFly(): boolean {
        return this._canFly;
    }

    public set canFly(value: boolean) {
        this._canFly = value;
        this.canFlyChanged.emit(value);
    }
}