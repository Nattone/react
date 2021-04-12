import { PROFILE_RENAME } from './actions.js';

const defaultState = {
    name: "your name"
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case PROFILE_RENAME:
            return {
                ...state,
                name: action.name
            }
        default: return state;
    }
};

export default reducer;