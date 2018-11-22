import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Brain } from '../models/brain.model';

export const ADD_BRAIN = '[BRAIN] Add';
export const REMOVE_BRAIN = '[BRAIN] Remove';

export class AddBrain implements Action {
    readonly type = ADD_BRAIN;

    constructor(public payload: Brain) { }
}

export class RemoveBrain implements Action {
    readonly type = REMOVE_BRAIN;

    constructor(public payload: number) { }
}

export type Actions = RemoveBrain | AddBrain;
