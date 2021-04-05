import React from 'react';

const Message = (props) => (
    <div className="message">
        <span className="message-author">{props.author}: </span>
        <span className="message-text">{props.text}</span>
    </div>
);

const MessagesList = (props) => (
    props.messages.map((message, index) => (
        <Message
            author={message.author}
            text={message.text}
            key={index}
        />
    ))
);

export default MessagesList
