import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MessagesList from './MessagesList.jsx';
import MessageForm from './MessageForm.jsx';
import { useParams } from 'react-router';
import { CHATS_MESSAGES_ADD } from '../store/chats/actions.js';

// const defaultMessages = [
//     { author: 'кто-то', text: 'Привет' },
//     { author: 'кто-то еще', text: 'Как дела?' }
// ]


const Chat = (props) => {
    const { activeChat } = useParams()
    const profileName = useSelector((state) => state.profile.name);
    const messages = useSelector((state) => (state.chats.messages[activeChat] || []));
    const dispatch = useDispatch()

    const sendMessage = (newMessage, activeChat) => {
        dispatch({ type: CHATS_MESSAGES_ADD, newMessage, activeChat })
    }

    console.log('messages', messages)

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].author === profileName) {
            const answer = {
                author: 'robot',
                text: 'ты мне не нравишься'
            };
            setTimeout(() => {
                sendMessage(answer, activeChat)
            }, 1000);
        };
    }, [messages]);

    const onSubmitHandler = (value) => {
        const newMessage = {
            author: profileName,
            text: value
        };
        sendMessage(newMessage, activeChat)
    };
    return (
        <div className="chat">
            <h2 className="title">{props.title}</h2>
            <div className="messages-wrapper">
                <MessagesList messages={messages} />
            </div>
            <MessageForm onSubmit={onSubmitHandler} />
        </div>
    )
}
export default Chat