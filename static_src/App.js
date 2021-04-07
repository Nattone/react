import React, { useState } from 'react';

import Layout from './components/Layout.jsx';
import Chat from './components/Chat.jsx';

import "./styles/style.scss";
import ChatList from './components/ChatList.jsx';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#8135fb',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#fedd7d',
            main: '#fd3ed2',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#fd3ed2',
        },
    },
});

const list = ["work-chat", "family-chat", "friend-chat"];

const App = () => {
    const [activeChat, setActiveChat] = useState(0);
    const onChatChangeHandler = (chatIndex) => {
        setActiveChat(chatIndex)
    };
    return (
        <Layout>
            <ChatList list={list} onChange={onChatChangeHandler} />
            <Chat title={list[activeChat]} />
        </Layout>
    )
}

export default App