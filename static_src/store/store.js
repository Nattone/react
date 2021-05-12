import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import chatsReducer from './chats/reducer.js';
import profileReducer from './profile/reducer.js';

const persistConfig = { //спец объект, ктр определяет, что как и где сохраняем
    key: "root",
    storage //по умолчанию storage - localStorage
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
    }),
    applyMiddleware(thunk),
);

const store = createStore(
    persistedReducer
);

// const store = createStore(combineReducers({
//     chats: chatsReducer,
//     profile: profileReducer
// }));

export default store;
export const persistor = persistStore(store);