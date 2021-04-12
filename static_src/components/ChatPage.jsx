import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import Chat from './Chat.jsx';
import ChatList from './ChatList.jsx';

const list = ["work-chat", "family-chat", "friend-chat"];

const ChatPage = (props) => {
    const { activeChat } = useParams()

    return (
        <div className="chatwrapper">
            <ChatList list={list} />
            <Chat title={list[activeChat]} />
        </div>
    )
}
export default ChatPage
