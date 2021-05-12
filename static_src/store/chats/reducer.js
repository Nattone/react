import { CHATS_ADD, CHATS_MESSAGES_ADD } from './actions.js';

const defaultState = {
    list: ["work-chat", "family-chat", "friend-chat"],
    messages: {
        0: [
            { author: 'кто-то', text: 'Привет' },
            { author: 'кто-то еще', text: 'Как дела?' }
        ]
    },
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

        case CHATS_MESSAGES_ADD:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.activeChat]: [...(state.messages[action.activeChat] || []), action.newMessage]
                }
            };

        default: return state;
    }
};

export default reducer
