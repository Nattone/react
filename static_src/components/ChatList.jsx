import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { CHATS_ADD } from '../store/chats/actions';

const ChatList = (props) => {
    const { activeChat } = useParams()
    const dispatch = useDispatch()

    const addChatHandler = useCallback(() => {
        dispatch({ type: CHATS_ADD, name: "new chat" })
    }, [])

    return (
        <div className="chatlist">
            <div className="chatlist-wrapper">
                {props.list.map((item, index) => (
                    <Link to={`/chats/${index}`}
                        className={`chat-item${(parseInt(activeChat) === index) ? ' _active' : ''}`}
                        key={index}
                    >
                        {item}
                    </Link>
                ))}
            </div>
            <button className="button" onClick={addChatHandler}>Добавить чат</button>
        </div>
    )
}
export default ChatList