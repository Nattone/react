import React, { useState } from 'react';

export default function MessageForm(props) {
    const [inputText, setInputText] = useState('');

    const onChangeHandler = (event) => {
        setInputText(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        props.onSubmit(inputText);
        setInputText('');
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                name="message"
                value={inputText}
                onChange={onChangeHandler}
            />
            <input
                type="submit"
                value="Отправить"
            />
        </form>
    );
}
