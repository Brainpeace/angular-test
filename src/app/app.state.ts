import { Brain } from './store/models/brain.model';
import { Sidebar } from './store/models/sidebar.model';

export interface AppState {
  readonly brainStore: Brain[];
  readonly sidebarStore: Sidebar;
}
