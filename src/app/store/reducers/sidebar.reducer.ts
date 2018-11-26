
import * as SidebarActions from '../actions/sidebar.action';
import { Sidebar } from '../models/sidebar.model';

const initialState: Sidebar = {
    open: true
};

export function sidebarReducer(state: Sidebar = initialState, action: SidebarActions.Actions) {
    switch (action.type) {
        case SidebarActions.TOGGLE_SIDEBAR:
            return { ...state, open: action.payload };
        default:
            return state;
    }
}
