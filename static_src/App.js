import React, { useState } from 'react'

const App = () => {
    const [messages, setMessages] = useState(['Привет', 'Как дела?']);
    return (
        <div>
            <MessageField messages={messages} />
            <Button onClick={() => setMessages([...messages, 'new message'])} />
        </div>
    )
}

export default App

const MessageComponent = (props) => <div>{props.text}</div>;
const MessageField = (props) => (
    props.messages.map(message => <MessageComponent text={message} />)
);
// map - перебор элементов массива. Встроенный метод массивов

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick}>Добавить строку</button>
    )
}