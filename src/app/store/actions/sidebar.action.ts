import { Action } from '@ngrx/store';

export const TOGGLE_SIDEBAR = '[SIDEBAR] Toggle';

export class ToggleSidebar implements Action {
  readonly type = TOGGLE_SIDEBAR;
  constructor(public payload: boolean) {}
}

export type Actions = ToggleSidebar;
