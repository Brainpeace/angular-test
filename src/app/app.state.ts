import { Brain } from './store/models/brain.model';


export interface AppState {
    readonly brain: Brain[];
}
