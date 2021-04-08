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
                placeholder="напишите что-нибудь"
                name="message"
                value={inputText}
                onChange={onChangeHandler}
                className="form-input"
            />
            <input
                type="submit"
                className="form-button"
                value="Отправить"
            />
        </form>
    );
}
