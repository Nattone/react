import React from 'react';

const Message = (props) => (
    <div>
        <span>{props.author}: </span>
        <span>{props.text}</span>
    </div>
);

const MessagesList = (props) => (
    props.messages.map(message => (
        <Message
            author={message.author}
            text={message.text}
        />
    ))
);

export default MessagesList
