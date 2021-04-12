import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import Chat from './Chat.jsx';
import ChatList from './ChatList.jsx';

const ChatPage = (props) => {
    const { activeChat } = useParams()
    const list = useSelector((state) => state.chats.list)

    return (
        <div className="chatwrapper">
            <ChatList list={list} />
            <Chat title={list[activeChat]} />
        </div>
    )
}
export default ChatPage
