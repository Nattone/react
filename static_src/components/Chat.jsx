import React, { useEffect, useState } from 'react';

import MessagesList from './MessagesList.jsx';
import MessageForm from './MessageForm.jsx';

const currentAuthor = 'Я'
const defaultMessages = [
    { author: 'кто-то', text: 'Привет' },
    { author: 'кто-то еще', text: 'Как дела?' }
]

const Chat = (props) => {
    const [messages, setMessages] = useState(defaultMessages);

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].author === currentAuthor) {
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
            author: currentAuthor,
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