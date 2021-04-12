import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MessagesList from './MessagesList.jsx';
import MessageForm from './MessageForm.jsx';

const defaultMessages = [
    { author: 'кто-то', text: 'Привет' },
    { author: 'кто-то еще', text: 'Как дела?' }
]

const Chat = (props) => {
    const profileName = useSelector((state) => state.profile.name)
    const { activeChat } = props
    const [messages, setMessages] = useState(defaultMessages);

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].author === profileName) {
            const answer = {
                author: 'robot',
                text: 'ты мне не нравишься'
            };
            setTimeout(() => {
                setMessages([...messages, answer]);
            }, 1000);
        };
    }, [messages]);

    const onSubmitHandler = (value) => {
        const newMessage = {
            author: profileName,
            text: value
        };
        setMessages([...messages, newMessage]);
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