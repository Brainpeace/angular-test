
import * as SidebarActions from '../actions/sidebar.action';
import { Sidebar } from '../models/sidebar.model';


export function sidebarReducer(state: Sidebar, action: SidebarActions.Actions) {
    switch (action.type) {
        case SidebarActions.TOGGLE_SIDEBAR:
            return { ...state, open: action.payload };
        default:
            return state;
    }
}
