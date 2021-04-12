import { CHATS_ADD } from './actions.js';

const defaultState = {
    list: ["work-chat", "family-chat", "friend-chat"],
    messages: [
        { author: 'кто-то', text: 'Привет' },
        { author: 'кто-то еще', text: 'Как дела?' }
    ]
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHATS_ADD:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.name
                ]
            };

        default: return state;
    }
};

export default reducer
