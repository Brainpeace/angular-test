import { Action } from '@ngrx/store';
import { Sidebar } from '../models/sidebar.model';

export const TOGGLE_SIDEBAR = '[SIDEBAR] Toggle';

export class ToggleSidebar implements Action {
    readonly type = TOGGLE_SIDEBAR;

    constructor(public payload: boolean) { }
}

export type Actions = ToggleSidebar;
