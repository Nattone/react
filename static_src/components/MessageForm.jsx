import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
            <TextField
                label="напишите что-нибудь"
                size="small"
                color="primary"
                name="message"
                value={inputText}
                onChange={onChangeHandler}
                className="input"
            />
            <Button
                variant="outlined"
                type="submit"
                color="primary"
                size="large"
                className="button">
                Отправить
            </Button>
        </form>
    );
}
