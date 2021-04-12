import { createStore, combineReducers } from 'redux';
import chatsReducer from './chats/reducer.js';
import profileReducer from './profile/reducer.js';

const store = createStore(combineReducers({
    chats: chatsReducer,
    profile: profileReducer
}));

export default store;