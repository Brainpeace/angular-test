import { Action } from '@ngrx/store';
import { Brain } from './../models/brain.model';
import * as BrainActions from './../actions/brain.action';


const initialState: Brain = {
    originalUser: 'John Doe',
    imgUrl: 'https://placeimg.com/120/120/any',
    description: 'Lorem ipsum'
};

export function brainReducer(state: Array<Brain> = [initialState], action: BrainActions.Actions) {
    switch (action.type) {
        case BrainActions.ADD_BRAIN:
            return [...state, action.payload];
        case BrainActions.REMOVE_BRAIN:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
